const pagesData = require('./pages');

module.exports = async () => {
  let pages = await pagesData();
  return {
    builds: pages.filter((p) => p.tags.indexOf('Builds') > -1),
    foundations: pages.filter((p) => p.tags.indexOf('Foundations') > -1),
  };
};
