/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.rendlr.dev" },
      { protocol: "https", hostname: "realtyedge.vercel.app" },
      { protocol: "https", hostname: "trainerdev.vercel.app" },
      { protocol: "https", hostname: "aicademy-six.vercel.app" },
    ],
  },
};

export default nextConfig;
