/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['swiper'],
  outputFileTracingIncludes: {
    '/*': ['./src/content/**/*'],
  },
};

export default nextConfig;
