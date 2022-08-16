/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "drive.google.com",
      "dictionary.cambridge.org",
      "cloudfront.net",
      "media.istockphoto.com",
      "images.unsplash.com"
    ],
  },
};

module.exports = nextConfig;
