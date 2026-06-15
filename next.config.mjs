/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['swiper'],
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./src/content/**/*'],
    },
  },
  async redirects() {
    return [
      {
        source: '/service/marketing/search-engine-optimization',
        destination: '/service/marketing/sitio-web-dental',
        permanent: true,
      },
      {
        source: '/service/marketing/email-marketing',
        destination: '/service/marketing/seo-local-dental',
        permanent: true,
      },
      {
        source: '/service/marketing/social-marketing',
        destination: '/service/marketing/gestion-resenas',
        permanent: true,
      },
      {
        source: '/service/marketing/content-marketing',
        destination: '/service/marketing/marketing-contenido-dental',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
