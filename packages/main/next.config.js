const path = require("path")

const nextConfig = {
    reactStrictMode: true,
    optimizeFonts: false,
    env: {
        JOIN_KEY: process.env.JOIN_KEY
    },
    experimental: {
        outputStandalone: true,
        outputFileTracingRoot: path.join(__dirname, '../../')
    }
}

module.exports = nextConfig
