import axios from "axios";

const request = (config) => {
  const instance = axios.create({
    baseURL: "http://www-wms-java.itheima.net",
    timeout: 8000,
    headers: {},
  });

  // 请求拦截
  instance.interceptors.request.use(
    // 直接放行
    (config) => {
      return config;
    },
    // 请求失败
    (error) => {
      console.log(error);
    }
  );
  // 响应拦截
  instance.interceptors.request.use(
    // 直接放行
    (config) => {
      return config;
    },
    // 请求失败
    (error) => {
      console.log(error);
    }
  );
  return instance(config);
};

export default request;
