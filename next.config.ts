import path from "path";
import { fileURLToPath } from "url";
import type { NextConfig } from "next";

/** Project root (this package). Fixes Turbopack picking parent lockfile when nested in a monorepo. */
const rootDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: rootDir,
  },
  outputFileTracingRoot: rootDir,
};

export default nextConfig;
