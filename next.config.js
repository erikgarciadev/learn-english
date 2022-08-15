/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['drive.google.com','dictionary.cambridge.org','cloudfront.net']
  }
}

module.exports = nextConfig
