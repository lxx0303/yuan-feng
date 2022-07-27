import axios from "axios";

const request1 = axios.create({
  // baseURL: `http://www-wms-java.itheima.net `, // 基础路径
  // baseURL: process.env["VUE_APP_BASE_API"],
  baseURL: "/api",
  timeout: 8000,
  headers: {},
});
// const request = (config) => {
// 请求拦截
request1.interceptors.request.use(
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
request1.interceptors.response.use();

export default request1;
