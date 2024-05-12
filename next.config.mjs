/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'reqres.in',
                port: '',
                pathname: '/img/faces/1-image.jpg',
            }
        ]
    }
};

export default nextConfig;
