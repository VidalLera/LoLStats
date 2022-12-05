/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ddragon.leagueoflegends.com']
  },
  experimental: {
    appDir: true
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    localeDetection: true
  }
}

module.exports = nextConfig
