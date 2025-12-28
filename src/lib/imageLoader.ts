import { version } from '../../package.json';

interface ImageLoaderProps {
    src: string;
    width: number;
    quality?: number;
}

export default function imageLoader({ src }: ImageLoaderProps) {
    // In production, load images from versioned CDN
    if (process.env.NODE_ENV === 'production') {
        const CDN_URL = `https://assets.devshram.com/devshram/v${version}`;

        // If src is already an absolute URL, return as-is
        if (src.startsWith('http://') || src.startsWith('https://')) {
            return src;
        }

        // For relative URLs from public folder (e.g., /avinash.png)
        // Return the CDN URL - width and quality are ignored since images are unoptimized
        return `${CDN_URL}${src}`;
    }

    // In development, use local paths
    return src;
}
