import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/project-future-forge",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
