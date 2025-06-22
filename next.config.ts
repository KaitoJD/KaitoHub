import type { NextConfig } from "next";

const repo = "KaitoPage";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },  
};

export default nextConfig;
