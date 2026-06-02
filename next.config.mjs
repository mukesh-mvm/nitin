/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "studio-mcgee.com",
      },
    ],
  },
};

export default nextConfig;
