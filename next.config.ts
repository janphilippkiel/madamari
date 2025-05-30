/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // For subdirectory deployment - uncomment these lines:
  basePath: '/madamari',
  assetPrefix: '/madamari',
}

module.exports = nextConfig