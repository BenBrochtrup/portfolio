/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "http://localhost:3000",
    API_TOKEN: "89e2dc8991dc91c0f924af79d7089d0b099fd1e80949a1662180bea9f81a6db61d533b212b0d40b6aea1983fdcbfcf78b072bc06398c1d7e12945bedf7065b12c2eda3875c21188920921bf09eb46a9c1716ebb7146e75a2f60d3f36ccc172626f6ea7e56a9e7d2b170e8a646f9b8a25abb153ae542fe2cc0e25f3f18c6ded72",
    STRAPI_URL: "http://localhost:1337"
  },

  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/nextjs-github-pages",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
