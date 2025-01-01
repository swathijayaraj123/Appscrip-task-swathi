import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 
    images: {
      domains: ['fakestoreapi.com','img.icons8.com'], // Add the hostname here
    },
    eslint:{
      ignoreDuringBuilds:true
    }
  
};

export default nextConfig;
