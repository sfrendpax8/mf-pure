// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { ModuleFederationPlugin } = require("webpack").container;

const port = 8080;
const projectName = 'shell';

module.exports = {
  configureWebpack: {
    // entry: './src/main.js',
    devtool: 'source-map',
    cache: false,
    plugins: [
      new ModuleFederationPlugin({
        name: 'shell',
        filename: 'remoteEntry.js',
        // remoteType: 'var',
        remotes: {
          remote: 'remote@http://localhost:8081/remoteEntry.js',
          // remote: 'remote',
        },
        // library: { type: 'var', name: 'vue3app' },
        // shared: ['vue', 'vue-router']
        // shared: require("./package.json").dependencies,
      }),
    ],
  },
  chainWebpack: config => {
    // config.devServer
    //   .headers({
    //     "Access-Control-Allow-Origin": "*",
    //   })

    config.optimization.delete("splitChunks");
    // config.output.libraryTarget("umd");
  },
  // chainWebpack: config => {
  //   config.devServer
  //     .headers({
  //       "Access-Control-Allow-Origin": "*",
  //     })

  //   config.optimization.delete("splitChunks");
  //   config.output.libraryTarget("umd");
  // },

  // In this scope, we put stuff available through Vue Configuration Reference
  publicPath: `http://localhost:${port}/`,
  devServer: {
    // https: false,
    // host: 'localhost',
    port,
    // allowedHosts: 'all',
  },
  // filenameHashing: false,
  // css: {
  //   extract: false,
  // },
};

