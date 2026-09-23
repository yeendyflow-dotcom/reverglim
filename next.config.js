/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // ── Consolidación de dominio ─────────────────────────────────────
      // El dominio canónico oficial es https://reverglim.com.
      // Cualquier dominio legacy de Vercel redirige permanentemente (308)
      // al dominio oficial para evitar contenido duplicado indexable.
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'reverglim.vercel.app',
          },
        ],
        destination: 'https://reverglim.com/:path*',
        permanent: true,
      },
      {
        source: '/mejor-red-social-2025',
        destination: '/mejor-red-social-2026',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      // ── Protección de previews ───────────────────────────────────────
      // Los deployments de preview (*.vercel.app distintos al legacy, que
      // ya redirige) reciben X-Robots-Tag: noindex para que ningún buscador
      // los indexe como contenido duplicado de reverglim.com.
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<deployment>.+\\.vercel\\.app)',
          },
        ],
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive',
          },
        ],
      },
      // ── Cabeceras de robustez SEO en el sitio canónico ───────────────
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
