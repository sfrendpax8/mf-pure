// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { ModuleFederationPlugin } = require("webpack").container;

const port = 8080;
const projectName = 'shell';

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    cache: false,
    plugins: [
      new ModuleFederationPlugin({
        name: 'shell',
        filename: 'remoteEntry.js',
        remotes: {
          remote: 'remote@http://localhost:8081/remoteEntry.js',
          vue2: 'remoteVue2@http://localhost:8083/remoteEntry.js',
        },
        shared: ['vue', 'vue-router']
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

