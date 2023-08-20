const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@presentation': path.resolve(__dirname, 'src/presentation'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@domain': path.resolve(__dirname, 'src/domain'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
};
