// @ts-check
/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
const vivliostyleConfig = {
  language: 'ru',
  size: 'A4',
  theme: 'dist/index.css',
  image: 'ghcr.io/vivliostyle/cli:9.7.1',
  entry: [
    'example/report.md',
  ],
};

module.exports = vivliostyleConfig;
