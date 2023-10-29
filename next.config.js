const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === '1',
});

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  env: {
    GOOGLE_TAG_MANAGER_ID: (() => {
      if (isProd) return '';
      return '';
    })(),
    HEAP_IO_ID: (() => {
      if (isProd) return '';
      return '';
    })(),
    HOTJAR_ID: (() => {
      if (isProd) return '';
      return '';
    })(),
    FACEBOOK_PIXEL_ID: (() => {
      if (isProd) return '';
      return '';
    })(),
    RECAPTCHA_KEY: '',
  },
  webpack(config) {
    if (process.env.ANALYZE === '1') {
      config.plugins.push(new DuplicatePackageCheckerPlugin());
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },

  images: {
    domains: ['picsum.photos', 'ph-avatars.imgix.net'],
  },
};

module.exports = () => {
  const plugins = [withBundleAnalyzer];
  return plugins.reduce((acc, next) => {
    return next(acc);
  }, nextConfig);
};
