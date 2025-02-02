import bundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: 'frame-ancestors https://magic.store',
  },
  {
    key: 'Cache-Control',
    value: 'no-store',
  },
];

export default withNextIntl(
  withBundleAnalyzer({
    output: 'standalone',
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
    images: {
      remotePatterns: [
        {
          protocol: `http`,
          hostname: '**.demo.test',
          port: '',
          pathname: '/**',
        },

        {
          protocol: `https`,
          hostname: '**.demo.com',
          port: '',
          pathname: '/**',
        },
      ],
    },

    async headers() {
      return [
        {
          source: '/:path*',
          headers: securityHeaders,
        },
      ];
    },
  }),
);
