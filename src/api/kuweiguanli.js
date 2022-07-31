import request from "@/utils/request1";

// 列表数据
export function getKuweiList(params) {
  return request({
    url: "/location/pageDetail",
    method: "get",
    params,
  });
}

// 修改表中库位状态
export function updateListStatus(data) {
  return request({
    url: "/location",
    method: "put",
    data,
  });
}

// 编辑当前库位
export function editCurrentKuwei(params) {
  return request({
    url: `/location/${params}`,
    method: "get",
  });
}

export function changeKuwei(params) {
  return request({
    url: "/warehouse/list",
    method: "get",
    params,
  });
}

// 新增的数据
export function addData() {
  return request({
    url: "/codeFactory/next/KW",
    method: "get",
  });
}
// 新增的提交
export function addSubmit(data) {
  return request({
    url: "/location",
    method: "post",
    data,
  });
}
