import type { NextConfig } from "next";

const repo = "KaitoPage";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
  // Disable server-side features for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
