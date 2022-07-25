<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <div class="main_logo ml20 mt30 mb30">
            <img
              src="	http://www-wms-java.itheima.net/img/title.ef005a7a.png"
              alt=""
            />
          </div>
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">工作台</span>
          </el-menu-item>
          <!-- 基础信息管理 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in iconList"
            :key="item.id"
          >
            <!-- 第一级 -->
            <template slot="title">
              <i :class="item.className"></i>
              <span slot="title">基础信息管理</span>
            </template>
            <!-- 第二级 -->
            <el-menu-item-group>
              <el-menu-item index="1-1">仓库管理</el-menu-item>
              <el-menu-item index="1-2">库区管理</el-menu-item>
              <el-menu-item index="1-3">库位管理</el-menu-item>
              <el-menu-item index="1-4">库位视图</el-menu-item>
              <el-menu-item index="1-5">货品管理</el-menu-item>
              <el-menu-item index="1-6">货品类型管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">基础信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">基础信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">基础信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">基础信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项4</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      iconList: [
        { id: 1, className: "iconfont icon-jichuxinxiguanli" },
        { id: 2, className: "iconfont icon-shangwu" },
        { id: 3, className: "iconfont icon-cangkucangchu-xianxing" },
        { id: 4, className: "iconfont icon-rukuguanli" },
        { id: 5, className: "iconfont icon-chukuguanli" },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang="less">
.main_logo {
  img {
    width: 150px;
    height: 64px;
  }
}
// 工作台
.el-menu-item {
  background: #fff6e2 !important;
  color: #ffc12f !important;
  border-radius: 0 100px 100px 0;
}
/deep/.el-menu-item i {
  margin-left: 6px;
  color: #ffc12f !important;
}
// 侧边字体
/deep/.el-submenu__title {
  margin-left: 10px;
  color: rgb(136, 126, 126);
}
// 侧边图标
.el-submenu__title i {
  font-size: 20px;
}
.iconfont {
  margin-right: 10px;
}
</style>
