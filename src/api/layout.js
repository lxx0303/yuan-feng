import request from "@/utils/request";

export function getLayout(params) {
  return request({
    url: "/warehouse/page",
    method: "",
    params,
  });
}
