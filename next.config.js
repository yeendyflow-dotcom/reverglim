/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'reverglim.vercel.app' }],
        destination: 'https://reverglim.com/:path*',
        permanent: true,
      },
      {
        source: '/nosotros',
        destination: '/reverglim',
        permanent: true,
      },
      {
        source: '/que-es-reverglim',
        destination: '/reverglim',
        permanent: true,
      },
      {
        source: '/alternativa-tiktok',
        destination: '/reverglim',
        permanent: true,
      },
      {
        source: '/alternativa-instagram',
        destination: '/reverglim',
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
        destination: '/reverglim',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
