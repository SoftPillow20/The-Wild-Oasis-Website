/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL(
        "https://tufsolhwmmuserysoqtq.supabase.co/storage/v1/object/public/cabin-images/**",
      ),
    ],
    unoptimized: true,
  },
  // output: "export",
};

export default nextConfig;
