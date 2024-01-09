/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "http://localhost:3000",
    API_TOKEN: "89e2dc8991dc91c0f924af79d7089d0b099fd1e80949a1662180bea9f81a6db61d533b212b0d40b6aea1983fdcbfcf78b072bc06398c1d7e12945bedf7065b12c2eda3875c21188920921bf09eb46a9c1716ebb7146e75a2f60d3f36ccc172626f6ea7e56a9e7d2b170e8a646f9b8a25abb153ae542fe2cc0e25f3f18c6ded72",
    STRAPI_URL: "http://localhost:1337"
  }
}

module.exports = nextConfig
