/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  output: "standalone", // Enables standalone mode for static export
  trailingSlash: true, // Adds trailing slashes to URLs
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname), // Alias for project root
    };
    return config;
  },
  images: {
    unoptimized: true, // Disable image optimization for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Allow images from Cloudinary
        pathname: "/dirhzlg1c/**",
      },
    ],
  },
};
