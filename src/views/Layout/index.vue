<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <div class="main_logo ml20 mt30 mb30">
            <img
              src="	http://www-wms-java.itheima.net/img/title.ef005a7a.png"
              alt=""
            />
          </div>
          <el-menu-item index="/todoinfo">
            <i class="el-icon-menu"></i>
            <span slot="title">工作台</span>
          </el-menu-item>
          <!-- 基础信息管理 -->
          <el-submenu index="2">
            <!-- 第一级 -->
            <template slot="title">
              <i class="iconfont icon-jichuxinxiguanli"></i>
              <span slot="title">基础信息管理</span>
            </template>
            <!-- 第二级 -->
            <el-menu-item-group>
              <el-menu-item index="/kuguanli">仓库管理</el-menu-item>
              <el-menu-item index="/quguanli">库区管理</el-menu-item>
              <el-menu-item index="/kuweiguanli">库位管理</el-menu-item>
              <el-menu-item index="/kuweishitu">库位视图</el-menu-item>
              <el-menu-item index="/goodsmanage">货品管理</el-menu-item>
              <el-menu-item index="1-6">货品类型管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 商务管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="iconfont icon-shangwu"></i>
              <span slot="title">商务管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/shangwu">货主管理</el-menu-item>
              <el-menu-item index="1-2">承接商管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 库内管理 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="iconfont icon-cangkucangchu-xianxing"></i>
              <span slot="title">库内管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/kunei">盘点单</el-menu-item>
              <el-menu-item index="1-2">盘点任务</el-menu-item>
              <el-menu-item index="1-3">库存损益</el-menu-item>
              <el-menu-item index="1-4">实时库存</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 入库管理 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="iconfont icon-rukuguanli"></i>
              <span slot="title">入库管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/ruku">入库单</el-menu-item>
              <el-menu-item index="1-2">收获任务</el-menu-item>
              <el-menu-item index="1-3">上架任务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 出库管理 -->
          <el-submenu index="6">
            <template slot="title">
              <i class="iconfont icon-chukuguanli"></i>
              <span slot="title">出库管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/chuku">出货单</el-menu-item>
              <el-menu-item index="1-2">拣货任务</el-menu-item>
              <el-menu-item index="/handovertask">交接任务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
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
    return {};
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
  // background: #fff6e2 !important;
  // color: #ffc12f !important;
  border-radius: 0 100px 100px 0;
}
/deep/.el-menu-item i {
  margin-left: 6px;
  // color: #ffc12f !important;
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
