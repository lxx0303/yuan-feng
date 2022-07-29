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

// 修改信息
export function getUpdateInfo(params) {
  return request({
    url: `/warehouse/${params}`,
    method: "get",
  });
}
// 修改仓库状态
export function getSubmitInfo(data) {
  return request({
    url: "/warehouse",
    method: "put",
    data,
  });
}

// 新增
export function getAddInfo() {
  return request({
    url: "/codeFactory/next/CK",
    method: "get",
  });
}
// 新增提交
export function getAddSubmit(data) {
  return request({
    url: "/warehouse",
    method: "post",
    data,
  });
}
