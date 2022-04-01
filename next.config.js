/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/grade',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
