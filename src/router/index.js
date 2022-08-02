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
            component: () => import("@/views/baseInfo/cangkuguanli"),
          },
          {
            path: "/quguanli",
            name: "quguanli",
            component: () => import("@/views/baseInfo/kuquguanli"),
          },
          {
            path: "/kuweiguanli",
            name: "kuweiguanli",
            component: () => import("@/views/baseInfo/kuweiguanli"),
          },
          {
            path: "/kuweishitu",
            name: "kuweishitu",
            component: () => import("@/views/baseInfo/kuweishitu"),
          },
          {
            path: "/goodsmanage",
            name: "goodsmanage",
            component: () => import("@/views/baseInfo/goodsManage"),
          },
        ],
      },
      // 仓库管理-编辑
      {
        path: "/editWarehouse",
        name: "editWarehouse",
        component: () => import("@/views/baseInfo/components/editWareHose.vue"),
      },
      // 库区管理-编辑
      {
        path: "/kuquedit",
        name: "kuquedit",
        component: () => import("@/views/baseInfo/components/kuqu-edit.vue"),
      },
      // 库位管理-编辑
      {
        path: "/kuweiedit",
        name: "kuweiedit",
        component: () => import("@/views/baseInfo/components/kuwei-edit.vue"),
      },
      // 货品管理-编辑
      {
        path: "/goodsedit",
        name: "goodsedit",
        component: () =>
          import("@/views/baseInfo/components/goodsManage-edit.vue"),
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
        children: [
          {
            path: "/handovertask",
            name: "handovertask",
            component: () => import("@/views/chuku/handeover-task"),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
