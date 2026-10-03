/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/alternativa-tiktok',
        destination: '/que-es-reverglim',
        permanent: true,
      },
      {
        source: '/alternativa-instagram',
        destination: '/que-es-reverglim',
        permanent: true,
      },
      {
        source: '/red-social-segura-menores',
        destination: '/seguridad-infantil',
        permanent: true,
      },
      {
        source: '/red-social-sin-publicidad',
        destination: '/privacidad',
        permanent: true,
      },
      {
        source: '/mejor-red-social-2026',
        destination: '/que-es-reverglim',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
