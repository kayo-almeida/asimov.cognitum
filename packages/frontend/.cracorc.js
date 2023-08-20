const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@enums': path.resolve(__dirname, 'src/enums'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@ui': path.resolve(__dirname, 'src/ui'),
    },
  },
};
