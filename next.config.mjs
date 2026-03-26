/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "os.alipayobjects.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
