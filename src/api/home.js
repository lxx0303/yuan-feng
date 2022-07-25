// 工作台

import request from "@/utils/request";

export function getTodoInfo(params) {
  return request({
    url: "/api/home/todo",
    method: "Get",
    params,
  });
}
