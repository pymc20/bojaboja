const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  env: {
    SECRET_KEY: process.env.SECRET_KEY || "TEST",
    API_HOST: process.env.API_HOST
  },
  experimental: {
    outputStandalone: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};

module.exports = nextConfig;
