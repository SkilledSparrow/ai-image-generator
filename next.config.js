/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "aiimagegeneratorabhishe2.blob.core.windows.net",
    ],
  },
};

module.exports = nextConfig;
