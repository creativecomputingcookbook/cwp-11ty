const EleventyWebcPlugin = require('@11ty/eleventy-plugin-webc');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');

const md = new markdownIt({
  html: true,
});

module.exports = async function (eleventyConfig) {
  const EleventyVitePlugin = (await import('@11ty/eleventy-plugin-vite'))
    .default;
  const { EleventyHtmlBasePlugin } = await import('@11ty/eleventy');
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: { base: `/cwp-11ty` },
  });
  eleventyConfig.addPlugin(EleventyWebcPlugin, {
    components: [
      'src/_includes/components/**/*.webc',
      'npm:@11ty/eleventy-plugin-syntaxhighlight/*.webc',
    ],
  });
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter('findPostByTitles', (arr, titles) => {
    if (!arr || !titles) return [];
    return arr.filter((post) => titles.indexOf(post.data.title) > -1);
  });

  // mathew-made function to account for the prototype using sample data, use findPostByTitles after prototyping
  eleventyConfig.addFilter('findPostByDBPosts', (arr, relatedTitles) => {
    if (!arr || !relatedTitles) return [];
    return arr.filter((post) => relatedTitles.indexOf(post.title) > -1);
  });

  eleventyConfig.addFilter('markdown', (content) => {
    return md.render(content);
  });

  // Static assets to pass through
  eleventyConfig.addPassthroughCopy({
    ['./src/images']: `cwp-11ty/images`,
    ['./src/styles']: `cwp-11ty/styles`,
    ['./src/main.js']: `cwp-11ty/main.js`,
    ['./src/parsons.js']: `cwp-11ty/parsons.js`,
    ['./src/lib/']: `cwp-11ty/lib/`,
  });

  eleventyConfig.setServerOptions({
    // Default values are shown:

    // Whether the live reload snippet is used
    liveReload: true,

    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: true,

    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 8080,

    // Additional files to watch that will trigger server updates
    // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
    // Works great with a separate bundler writing files to your output folder.
    // e.g. `watch: ["_site/**/*.css"]`
    watch: [],

    // Show local network IP addresses for device testing
    showAllHosts: false,

    // Use a local key/certificate to opt-in to local HTTP/2 with https
    https: {
      // key: "./localhost.key",
      // cert: "./localhost.cert",
    },

    // Change the default file encoding for reading/serving files
    encoding: 'utf-8',
  });
};

module.exports.config = {
  dir: {
    input: 'src',
    output: '_site',
  },
  pathPrefix: 'cwp-11ty',
  passthroughFileCopy: true,
  templateFormats: ['html', 'md', 'webc'],
  htmlTemplateEngine: 'webc',
  dataTemplateEngine: 'webc',
  markdownTemplateEngine: 'webc',
};
