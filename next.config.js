/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Ensure Next.js builds a standalone app
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dirhzlg1c/**",
      },
    ],
  },
};

module.exports = nextConfig;
