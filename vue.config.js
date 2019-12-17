const webpack = require('webpack')

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  configureWebpack: {
      module: {
        // Fix for flot resize
        // modules: [
        //     path.resolve0(__dirname, 'public/svg'),
        // ],
        rules: [
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
            },
        ]
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jquery: 'jquery',
          'window.jQuery': 'jquery',
          jQuery: 'jquery'
        })
      ]
  },
  transpileDependencies: [
    'resize-detector' // vue-echarts
  ]
}
