import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: process.env.OMA_STATIC_EXPORT === '1' ? 'export' : 'standalone',
};

export default nextConfig;
