/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost:1337",
      "localhost",
      "next-project-ahmad.herokuapp.com",
    ],
  },
};

module.exports = nextConfig;
