import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Transpile the workspace UI package so Next.js can handle its CSS imports
  transpilePackages: ['@vez/ui'],
};

export default nextConfig;
