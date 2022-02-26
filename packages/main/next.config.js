/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    optimizeFonts: false,
    env: {
        JOIN_KEY: process.env.JOIN_KEY
    }
}

module.exports = nextConfig
