/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["fakestoreapi.com","cdn.dummyjson.com"]
    },
    env:{
        API_URL : process.env.API_URL
    },
};

export default nextConfig;
