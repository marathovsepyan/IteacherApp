// const webpack = require('webpack');
// const path = require('path');

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
  runtimeCompiler:true,
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
//
// {
//   test: /\.svg$/,
//       rules: [ {
//   oneOf: [ {
//     resourceQuery: /^\?vue-template/,
//     loader: 'vue-template-loader',
//     options: {
//       functional: true
//     }
//   }, {
//     loader: 'file-loader',
//     options: {
//       name: 'images/[name].[ext]?[hash]'
//     }
//   } ]
// }, {
//   loader: 'svgo-loader',
//   options: {
//     plugins: [
//       { removeViewBox: false },
//       { removeDimensions: true }
//     ]
//   }
// } ]
// }
