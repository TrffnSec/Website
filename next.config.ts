import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
      }
    : {}),

  typescript: {
    tsconfigPath: isGitHubPages
      ? "./tsconfig.pages.json"
      : "./tsconfig.json",
  },
};

export default nextConfig;
