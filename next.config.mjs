/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.evermos.com',
        port: '',
        pathname: '/public/**',
      },
    ]
  }
};

export default nextConfig;
