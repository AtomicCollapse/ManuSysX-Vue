module.exports = {
    devServer: {
      port: 8080,
      proxy: {
        '/api': {
          ws: false,
          pathRewrite: {},
          changeOrigin: true,
          target: 'http://localhost:48080',
        }
      }
    }
  }