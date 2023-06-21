/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL_LOCAL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL,
    BASE_URL_API: process.env.NEXT_PUBLIC_BASE_URL_API,
    BASE_URL_LOCAL_API: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
  },
  images: {
    // domains: ["googgle.com"],
  },
}

module.exports = nextConfig
