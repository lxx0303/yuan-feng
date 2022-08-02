import request from "@/utils/request1";

export function getShowInfo(params) {
  return request({
    url: "/location/listDetail",
    method: "get",
    params,
  });
}
