const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://fakestoreapi.com/',
        changeOrigin: true
      }
    }
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Vue Online Store'

        return args
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@icons': path.resolve(__dirname, 'src/components/icons'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@models': path.resolve(__dirname, 'src/models'),
        '@utils': path.resolve(__dirname, 'src/utils')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/main.scss";
        `
      }
    }
  }
}
