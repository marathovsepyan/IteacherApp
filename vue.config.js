const webpack = require('webpack');
const path = require('path');

// module.exports = {
//   lintOnSave: process.env.NODE_ENV !== 'production',
//   productionSourceMap: false,
//   configureWebpack: {
//       resolve: {
//         alias: {
//           '@': path.join(__dirname, 'src'),
//         },
//       },
//       module: {
//         // Fix for flot resize
//         // modules: [
//         //     path.resolve0(__dirname, 'public/svg'),
//         // ],
//         // },
//         rules: [
//           {
//             test: /\.svg$/,
//             loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
//           },
//           // {
//           //   test: /\.scss$/,
//           //   use: [
//           //     'vue-style-loader',
//           //     'css-loader',
//           //     'sass-loader'
//           //   ]
//           // },
//         ]
//       },
//       plugins: [
//         new webpack.ProvidePlugin({
//           $: 'jquery',
//           jquery: 'jquery',
//           'window.jQuery': 'jquery',
//           jQuery: 'jquery'
//         })
//       ]
//   },
//   transpileDependencies: [
//     'resize-detector' // vue-echarts
//   ]
// };

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
