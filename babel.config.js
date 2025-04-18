module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: '3.20.2',
        },
      ],
      [
        'prismjs',
        {
          languages: ['arduino'],
          plugins: ['line-numbers'],
          theme: 'default',
          css: true,
        },
      ],
    ],
  };
};
