import { setStorage, getStorage } from "@/utils/utils";

export default {
  state: {
    token: getStorage("token"),
  },
  getters: {
    getters_token(state) {
      return state.token;
    },
  },
  mutations: {
    mutations_state(state, params) {
      state.token = params;
      setStorage("token", params);
    },
  },
  actions: {},
  modules: {},
};
