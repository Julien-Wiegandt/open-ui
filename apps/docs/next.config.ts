import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ["@julien-wiegandt/open-ui"],
};

export default nextConfig;
