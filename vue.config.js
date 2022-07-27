const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  // babel node_modules 进行转义，安全性， 缺点： 耗时
  transpileDependencies: true, // 关闭eslint， build serve将不会进行eslint检查
  lintOnSave: false, // 书写原生的webpack配置项
  configureWebpack: {
    devServer: {
      open: true,
      port: 8888,
      host: "localhost",
      proxy: {
        "/ips": {
          // 需要代理到线上服务器
          target: "http://www-wms-java.itheima.net", // 跨域请求的地址
          changeOrigin: true,
        },
        "/api": {
          // 需要代理到线上服务器
          target: "http://www-wms-java.itheima.net", // 跨域请求的地址
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: {
        "#": path.join(__dirname, "src/components"),
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "元蜂物流管理";
      return args;
    });
  },
});
