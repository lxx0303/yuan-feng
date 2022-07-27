//基础信息管理

import request from "@/utils/request1";

// 仓库库管理
export function getWarehouseInfo(params) {
  return request({
    url: "/warehouse/page",
    method: "get",
    params,
  });
}
