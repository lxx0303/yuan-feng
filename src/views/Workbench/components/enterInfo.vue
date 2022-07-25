<template>
  <div>
    <el-card class="header-msg">
      <div class="header-info">
        <span>入库/出库信息</span>
        <el-button-group class="btns-bgc">
          <el-button type="primary" size="middle" @click="clickBtn"
            >本周</el-button
          >
          <el-button type="primary" size="middle">本月</el-button>
          <el-button type="primary" size="middle">全年</el-button>
        </el-button-group>
      </div>
      <!-- 图标 -->
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    clickBtn() {
      this.checked = true;
    },
  },
};
</script>

<style scoped lang="less">
.header-info {
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
}
.el-button--primary {
  background-color: #fff;
  color: #333;
  border-color: #eee;
}
.el-button--primary:focus {
  background-color: #ffb200;
  color: #fff;
}
</style>
