import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  eslint: {
    ignoreDuringBuilds: true  // Add this line
  }
}

export default nextConfig