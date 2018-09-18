module.exports={
  proxy:{
    '/api': {  //将192.168.1.101印射为/api
      target: ' https://www.baidu.com/api', // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/api': ''  //需要rewrite的,
      }
    }
  }
}
