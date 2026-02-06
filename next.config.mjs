/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['swiper'],
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./src/content/**/*'],
    },
  },
};

export default nextConfig;
