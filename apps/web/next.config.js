module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.animaapp.com",
        port: "",
        pathname: "/projects/**/img/**",
      },
    ],
  },
};
