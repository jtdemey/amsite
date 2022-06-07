const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: {
    server: path.join(process.cwd(), "src/server/server.js"),
  },
  mode: "production",
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "amserver.js",
  },
  externals: [nodeExternals()],
};