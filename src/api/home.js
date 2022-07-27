// 工作台

import request from "@/utils/request";

export function getTodoInfo() {
  return request({
    url: "/home/todo",
    method: "get",
  });
}

// 环形图
export function getHuanChart() {
  return request({
    url: "/home/stockUseStatus",
    method: "get",
  });
}

// 饼图
export function getBinChart() {
  return request({
    url: "/home/areaUseStatus",
    method: "get",
  });
}

// 条形图
export function getTiaoChart(params) {
  return request({
    url: "/home/sumList",
    method: "get",
    params,
  });
}
