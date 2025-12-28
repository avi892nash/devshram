import type { NextConfig } from "next";
import { version } from './package.json';

const CDN_URL = process.env.NODE_ENV === 'production'
    ? `https://assets.devshram.com/devshram/v${version}`
    : '';

const nextConfig: NextConfig = {
    // SSR is now enabled (removed 'output: export')

    // Version-based CDN for static assets
    assetPrefix: CDN_URL,

    // Serve images directly from CDN using custom loader
    images: {
        loader: 'custom',
        loaderFile: './src/lib/imageLoader.ts',
    },

    // Keep trailing slashes for consistency
    trailingSlash: true,

    // Enable compression for faster responses
    compress: true,

    // Security and performance optimizations
    poweredByHeader: false,
    reactStrictMode: true,
};

export default nextConfig;
