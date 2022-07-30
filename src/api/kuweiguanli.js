import request1 from "@/utils/request1";

// 列表数据
export function getKuweiList(params) {
  return request1({
    url: "/location/pageDetail",
    method: "get",
    params,
  });
}

// 修改表中库位状态
export function updateListStatus(data) {
  return request1({
    url: "/location",
    method: "put",
    data,
  });
}
