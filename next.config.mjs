/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    if (!options.isServer) {
      config.resolve.fallback = { fs: false, module: false, path: false };
    }

    return config;
  },
  transpilePackages: ["@electric-sql/pglite"],
};

export default nextConfig;
