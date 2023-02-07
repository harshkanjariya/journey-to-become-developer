/** @type {import('next').NextConfig} */

let nextConfig;
if (process.env.ENVIRONMENT === 'production') {
  nextConfig = {
    reactStrictMode: true,
    assetPrefix: '/journey-to-become-developer/',
    basePath: '/journey-to-become-developer'
  }
} else {
  nextConfig = {
    reactStrictMode: true,
  }
}

module.exports = nextConfig
