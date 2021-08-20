const webpack = require("webpack");
module.exports = {
  // 配置插件参数
  configureWebpack: {
    plugins: [
      // 配置 jQuery 插件的参数
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"],
      }),
		],
		// 高德地图配置
		externals: {
      AMap: "window.AMap"
    }
	},

  // 服务器请求配置
  devServer: {
  proxy: {
    '/api': { //匹配api开头的走代理
      target: 'http://127.0.0.1:8011/', // 接口地址
      changeOrigin: true,  //允许跨域
      pathRewrite: {
        '^/api': '' //重新路由，访问后端接口不一定是api 开头的这个时候就可以改变
      }
    }
  }
},

  productionSourceMap: false,
  publicPath: './'
};