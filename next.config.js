/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ipfs.io", "kubicsnft.mypinata.cloud"],
  },
};

// module.exports = {
//   images: {
//     domains: ["ipfs.io", "kubicsnft.mypinata.cloud"],
//   },
// };

module.exports = nextConfig;