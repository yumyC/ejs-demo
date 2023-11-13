module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
      modules: false,
      loose: true,
      bugfixes: true,
      useBuiltIns: 'usage',
      corejs: 3,
    }],
  ],
};
