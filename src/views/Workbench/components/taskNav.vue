<template>
  <div class="task-nav">
    <el-card>
      <span class="header-msg">任务导航</span>
      <div class="fcc">
        <div class="all f1">
          <div class="icon-box box1">
            <i class="iconfont icon-daishouhuo"></i>
          </div>
          <span>收获任务</span>
        </div>
        <div class="all f1">
          <div class="icon-box box2">
            <i class="iconfont icon-iconfontzhizuobiaozhunbduan31"></i>
          </div>
          <span>上架任务</span>
        </div>
        <div class="all f1">
          <div class="icon-box box3">
            <i class="iconfont icon-order1"></i>
          </div>
          <span>盘点任务</span>
        </div>
        <div class="all f1">
          <div class="icon-box box4">
            <i class="iconfont icon-jianhuo"></i>
          </div>
          <span>拣货任务</span>
        </div>
        <div class="all f1">
          <div class="icon-box box5">
            <i class="iconfont icon-jiaojiebanguanli2"></i>
          </div>
          <span>交接任务</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.task-nav {
  margin-top: 20px;
  .header-msg {
    font-size: 16px;
    font-weight: 700;
  }
  .all {
    margin: 10px;
    font-size: 16px;
    background-color: #fbf7f7;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    line-height: 50px;
    i {
      color: #fff;
      font-size: 28px;
    }
    span {
      font-size: 16px;
      color: #332929;
    }
  }
  .all:hover {
    background: hsla(0, 0%, 100%, 0.8);
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 6%);
    border-radius: 8px;
    border: 1px solid #f5efee;
  }
  .icon-box {
    width: 49px;
    height: 49px;
    border-radius: 25px;
  }
  .box1 {
    background-color: rgb(0, 118, 255);
  }
  .box2 {
    background-color: rgb(82, 212, 243);
  }
  .box3 {
    background-color: rgb(255, 113, 0);
  }
  .box4 {
    background-color: rgb(255, 96, 158);
  }
  .box5 {
    background-color: rgb(255, 178, 0);
  }
}
</style>
