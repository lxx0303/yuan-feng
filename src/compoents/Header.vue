<template>
  <div class="header-box">
    <div class="close-btns">
      <el-button type="primary" class="btn">工作台</el-button>
      <!-- <el-button type="primary" class="btn"
        >工作台<i class="el-icon-close el-icon--right"></i
      ></el-button> -->
    </div>
    <div class="select-down">
      <el-dropdown>
        <el-button type="primary">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-back">关闭左侧</el-dropdown-item>
          <el-dropdown-item icon="el-icon-right">关闭右侧</el-dropdown-item>
          <el-dropdown-item icon="el-icon-close">关闭其他</el-dropdown-item>
          <el-dropdown-item icon="el-icon-error">关闭全部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.header-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 50px;
  width: 100%;
  background-color: #eee;
}
.close-btns {
  padding-left: 20px;
  line-height: 45px;
}
.btn {
  border: 0;
  background-color: #fff;
  color: #999;
}
.btn:focus {
  color: orange;
}
.select-down {
  line-height: 45px;
  padding-right: 20px;
}
.el-button--primary {
  background-color: #fff;
  color: #333;
  border: 0;
  font-size: 16px;
}
</style>
