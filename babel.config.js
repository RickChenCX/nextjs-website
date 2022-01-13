module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["inline-react-svg"],
    [
      "import",
      {
        libraryName: "@ant-design/icons",
        libraryDirectory: "lib/icons",
        camel2DashComponentName: false,
      },
      "@ant-design/icons",
    ],
  ],
};
