/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        // Optional: Specify if you need to restrict to specific paths
        // pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        // Optional: Specify if you need to restrict to specific paths
        // pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
