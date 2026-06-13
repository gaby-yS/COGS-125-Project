/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/COGS-125-Project/' : '',
  basePath: isProd ? '/COGS-125-Project' : '',
  output: 'export',
};

export default nextConfig;