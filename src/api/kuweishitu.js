import request from "@/utils/request1";

export function getListDetail(params) {
  return request({
    url: "/location/listDetail",
    method: "get",
    params,
  });
}

export function getAreaList(params) {
  return request({
    url: "/area/list",
    method: "get",
    params,
  });
}

export function getWarehouseList(params) {
  return request({
    url: "/warehouse/list",
    method: "get",
    params,
  });
}

export function getAreaOverview(params) {
  return request({
    url: `/area/overview/${params}`,
    method: "get",
  });
}
