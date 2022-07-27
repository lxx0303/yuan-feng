import axios from "axios";

const request = axios.create({
  // baseURL: `http://www-wms-java.itheima.net `, // 基础路径
  baseURL: process.env["VUE_APP_BASE_API"],
  // baseURL: "/ips",
  timeout: 8000,
  headers: {},
});
// const request = (config) => {
// 请求拦截
request.interceptors.request.use(
  (config) => {
    const token = "11111";
    // 如果有一些接口需要认证才可以访问，就在这统一设置
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截
request.interceptors.response.use();
// (res) => {
//   return res;
// },
// () => {
//   // 如果有需要授权才可以访问的接口，统一去login授权
//   // 如果有错误，这里面去设置处理，显示错误信息
// }
// ();
// return instance(config);
// };

export default request;
