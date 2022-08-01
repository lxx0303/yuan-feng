import request from "@/utils/request";

export function getTaskList(params) {
  return request({
    url: "/handover/pageDetail",
    method: "get",
    params,
  });
}
