import request from "@/utils/request1";

export function getGoodsInfo(params) {
  return request({
    url: "/goods/pageDetail",
    method: "get",
    params,
  });
}

// 修改当前货品
export function editCurrentInfo(params) {
  return request({
    url: `/goods/${params}`,
    method: "get",
  });
}

// 库区数据
export function editCurrentKuquInfo(params) {
  return request({
    url: "/area/list",
    method: "get",
    params,
  });
}

// 获取货主数据
export function editCurrentPersonName(params) {
  return request({
    url: "/owner/vague",
    method: "get",
    params,
  });
}
