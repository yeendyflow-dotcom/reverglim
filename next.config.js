/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/mejor-red-social-2025',
        destination: '/mejor-red-social-2026',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
