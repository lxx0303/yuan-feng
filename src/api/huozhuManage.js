import request from "@/utils/request1";

export function getCargoOwnerInfo(params) {
  return request({
    url: "/owner/page",
    method: "get",
    params,
  });
}

// 编辑
export function editCurrentInfo(params) {
  return request({
    url: `/owner/detail/${params}`,
    method: "get",
  });
}

// 省/市/区
