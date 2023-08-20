const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@presentation': path.resolve(__dirname, 'src/presentation'),
    },
  },
};
