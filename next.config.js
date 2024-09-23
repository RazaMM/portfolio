/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.gql|.graphql$/,
      use: {
        loader: 'webpack-graphql-loader',
        options: {
          removeUnusedFragments: true,
          output: 'document',
          validate: false,
          minify: true,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
