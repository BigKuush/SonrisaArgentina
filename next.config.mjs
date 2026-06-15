/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['swiper'],
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./src/content/**/*'],
    },
  },
  async redirects() {
    const blogRedirects = [
      [
        'google-maps-gets-views-website-gets-clients',
        'google-maps-clinicas-dentales',
      ],
      [
        'local-seo-basics-buenos-aires-that-actually-matter',
        'seo-local-buenos-aires-clinicas-dentales',
      ],
      [
        'how-to-write-service-page-copy-that-ranks-and-converts',
        'copy-paginas-servicio-seo-dental',
      ],
      [
        'how-to-structure-service-pages-for-seo-and-inquiries',
        'estructura-paginas-servicio-seo-dental',
      ],
      ['instagram-is-not-a-website', 'instagram-no-es-sitio-web-dental'],
      ['what-makes-a-website-sell-2026', 'que-hace-vender-sitio-web-dental'],
      [
        'website-checklist-for-service-businesses-in-argentina',
        'checklist-sitio-web-clinica-dental-argentina',
      ],
    ].map(([source, destination]) => ({
      source: `/blog/${source}`,
      destination: `/blog/${destination}`,
      permanent: true,
    }));

    return [
      {
        source: '/marketing',
        destination: '/',
        permanent: true,
      },
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
      {
        source: '/service/design-and-development',
        destination: '/service/marketing/sitio-web-dental',
        permanent: true,
      },
      {
        source: '/service/interaction-design',
        destination: '/service/marketing/sitio-web-dental',
        permanent: true,
      },
      {
        source: '/service/branding-design',
        destination: '/service/marketing/marketing-contenido-dental',
        permanent: true,
      },
      {
        source: '/service/ecommerce-development',
        destination: '/service/marketing/seo-local-dental',
        permanent: true,
      },
      ...blogRedirects,
    ];
  },
};

export default nextConfig;
