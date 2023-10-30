/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true }
}

module.exports = nextConfig
