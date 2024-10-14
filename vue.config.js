module.exports = {
  //配置开发服务器
  devServer: {
    port: 8080,
    //配置开发服务器的代理
    proxy: {
      '/api/infra': {
        ws: false,
        pathRewrite: {},
        changeOrigin: true,
        target: 'http://localhost:48080',
      },
      '/api/pms': {
        ws: false,
        pathRewrite: {},
        changeOrigin: true,
        target: 'http://localhost:48080',
      },
    }
  }
}