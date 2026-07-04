import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
};

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  // Don't run the service worker during `next dev` — it caches aggressively
  // and gets in the way of hot reloading. Offline is tested via a prod build.
  disable: process.env.NODE_ENV === "development",
});

export default withSerwist(nextConfig);
