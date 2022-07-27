import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/",
    name: "Layout",
    component: () => import("@/views/Layout"),
    redirect: "/todoinfo",
    children: [
      {
        path: "/todoinfo",
        name: "todoInfo",
        component: () => import("@/views/Workbench"),
        // meta: { title: "工作台" },
      },
      // 基础信息
      {
        path: "/baseInfo",
        name: "baseInfo",
        component: () => import("@/views/baseInfo"),
        redirect: "/kuguanli",
        children: [
          {
            path: "/kuguanli",
            name: "kuguanli",
            component: () => import("@/views/baseInfo"),
            children: [
              // {
              //   path: "/editWarehouse",
              //   name: "editWarehouse",
              //   component: () =>
              //     import("@/views/baseInfo/components/editWareHose.vue"),
              // },
            ],
          },
        ],
      },
      // 商务管理
      {
        path: "/shangwu",
        name: "shangwu",
        component: () => import("@/views/Shangwu"),
        redirect: "",
      },
      // 库内管理
      {
        path: "/kunei",
        name: "kunei",
        component: () => import("@/views/Kunei"),
        redirect: "",
      },
      // 入库管理
      {
        path: "/ruku",
        name: "ruku",
        component: () => import("@/views/ruku"),
        redirect: "",
      },
      // 出库管理
      {
        path: "/chuku",
        name: "chuku",
        component: () => import("@/views/chuku"),
        redirect: "",
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
