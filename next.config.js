/** @type {import('next').NextConfig} */
const {merge} = require('lodash')
const withImages = require('next-images')

const imagesConfig = withImages()

const svgLoaderConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
const nextConfig = {
  reactStrictMode: true,
}

module.exports = merge(
  nextConfig,
  imagesConfig,
  svgLoaderConfig
)