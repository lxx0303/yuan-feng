import request from "@/utils/request";

export function getHomeInfo(params) {
  return request({
    url: "/home/todo",
    params,
  });
}
