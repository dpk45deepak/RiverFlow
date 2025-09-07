/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cloud.appwrite.io",
            },
            {
                protocol: "https",
                hostname: "fra.cloud.appwrite.io",
            }
        ],
    },
};

export default nextConfig;
