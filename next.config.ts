import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // untuk mengakses semua gambar tanpa harus satu satu

  // images:{
  //   unoptimized: true
  // }

  // atau

  // untuk mengakses gambar yg spesifik atau 1 1

  // images:{
  //   remotePatterns:[
  //     {
  //       protocol: "https",
  //       hostname: "hostname.com",
  //       pathname: "/**"
  //     }
  //   ]
  // }
};

export default nextConfig;
