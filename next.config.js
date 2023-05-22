/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experiments: {
    topLevelAwait: true
  },
  async redirects() {
    return [
      {
        source: '/projects/null/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projects/undefined/:path*',
        destination: '/',
        permanent: true,
      }
    ];
  },
}

module.exports = nextConfig
