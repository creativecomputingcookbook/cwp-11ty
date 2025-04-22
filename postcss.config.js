module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-assets': {
      basePath: 'src/',
      baseUrl: '/cwp-11ty',
      loadPaths: ['images/'],
    },
  },
};
