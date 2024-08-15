/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/scale-africa.appspot.com/Image/**/*.{jpg,jpeg,png}",
      },
    ],
  },
};

export default nextConfig;
