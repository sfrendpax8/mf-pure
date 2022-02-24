// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { ModuleFederationPlugin } = require("webpack").container;

const port = 8083;
const projectName = 'remoteVue2';

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    cache: false,
    plugins: [
      new ModuleFederationPlugin({
        name: projectName,
        filename: 'remoteEntry.js',
        exposes: {
          './vue2': './node_modules/vue/dist/vue',
          './TestVue2': './src/views/Home.vue',
        },
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

