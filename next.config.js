module.exports = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  async rewrites() {
    return [
      {
        source: "/profileUser/:username*",
        destination: "/profileUser",
      },
    ];
  },
};
