import request from "@/utils/request1";

export function getAreaListInfo(params) {
  return request({
    url: "/area/pageDetail",
    method: "get",
    params,
  });
}

// 修改库区状态
export function updateStatus(data) {
  return request({
    url: "/area",
    method: "put",
    data,
  });
}

// 所属仓库
export function updateCangku(params) {
  return request({
    url: "/warehouse/list",
    method: "get",
    params,
  });
}

// 修改当前库区
export function updateCurrentInfo(params) {
  return request({
    url: `/area/${params}`,
    method: "get",
  });
}

// 新增
export function addCangkuInfo() {
  return request({
    url: "/codeFactory/next/KW",
    method: "get",
  });
}

// 新增提交
// 新增
export function addSumbit(data) {
  return request({
    url: "/area",
    method: "post",
    data,
  });
}
