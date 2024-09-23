/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.gql|.graphql$/,
      use: {
        loader: 'webpack-graphql-loader',
        options: {
          removeUnusedFragments: true,
          output: 'string',
          validate: false,
          minify: false,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
