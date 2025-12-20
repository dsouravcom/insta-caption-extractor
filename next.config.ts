import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.icons8.com",
                pathname: "/*/**",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "/**/*",
            },
        ],
        formats: ["image/avif", "image/webp"],
    },
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
};

export default nextConfig;
