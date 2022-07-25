<template>
  <div>
    <div class="work_top">
      <div class="work_left">
        <div class="work_header">
          <img
            src="	http://www-wms-java.itheima.net/img/dashboard-banner-left@2x.5afd2949.png"
            alt=""
          />
          <img
            class="work_picture"
            src="http://www-wms-java.itheima.net/img/dashboard-banner-right@2x.28195570.png"
            alt=""
          />
        </div>
        <div class="header_box fsc">
          <!-- 头像 -->
          <div class="work_logo fcc-c">
            <img
              src="http://www-wms-java.itheima.net/img/avatar@2x.4f4a758f.png"
              alt=""
            />
            <span>仓储管理员</span>
          </div>
          <!-- 标语 -->
          <div class="work_zym">
            <p>我不是为了输赢，我就是认真！</p>
            <p>——罗永浩</p>
          </div>
          <div class="header_right">
            <span>北京总仓</span>
          </div>
        </div>
        <!-- 代办信息 -->
        <div>
          <TodoInfo></TodoInfo>
        </div>
      </div>
      <!-- 右边通知 -->
      <div class="work_right">
        <div class="note">
          <div>通知/公告</div>
        </div>
        <div class="note_first">
          <div class="hr"></div>
          <div>紧急通知</div>
          <span>2020.12.30 18:23:14</span>
        </div>
        <div class="note_first">
          <div class="hr"></div>
          <div>运维服务更新通知</div>
          <span>2021.01.25 18:23:14</span>
        </div>
        <div class="note_first">
          <div class="hr"></div>
          <div>客户入库变更通知</div>
          <span>2021.01.26 18:23:14</span>
        </div>
        <div class="note_first">
          <div class="hr"></div>
          <div>五一放假通知</div>
          <span>2021.02.15 18:23:14</span>
        </div>
        <div class="note_first">
          <div class="hr"></div>
          <div>品达物流系统对接通知</div>
          <span>2021.3.25 18:23:14</span>
        </div>
      </div>
    </div>
    <!-- 任务导航 -->
    <div class="work_middle">
      <TaskNav></TaskNav>
    </div>
    <!-- 出入库的信息 -->
    <div class="enter-info">
      <EnterInfo></EnterInfo>
    </div>
    <!-- 库存使用 -->
    <div class="stock-use">
      <div class="stock-left">
        <StockHuan></StockHuan>
      </div>
      <div>
        <StockRight></StockRight>
      </div>
    </div>
  </div>
</template>

<script>
import TodoInfo from "@/views/Workbench/components/todoInfo.vue";
import TaskNav from "@/views/Workbench/components/taskNav.vue";
import EnterInfo from "@/views/Workbench/components/enterInfo.vue";
import StockHuan from "@/views/Workbench/components/stock/stockHuan.vue";
import StockRight from "@/views/Workbench/components/stock/stockRight.vue";

export default {
  components: { TodoInfo, TaskNav, EnterInfo, StockRight, StockHuan },
};
</script>

<style scop TodoInfoed lang="less">
.work_top {
  display: flex;
}
.work_left {
  position: relative;
  width: 100%;
  .work_header {
    height: 148px;
    width: 100%;
    background-color: #ffae43;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    img {
      height: 100%;
    }
    .work_picture {
      justify-content: flex-end;
    }
  }
  .header_box {
    position: absolute;
    top: 0;
    left: 0;
    height: 148px;
    box-sizing: border-box;
    width: 100%;
    .work_logo {
      margin-left: 30px;
      span {
        margin-top: 10px;
        font-size: 14px;
      }
    }
    .work_zym {
      margin-left: 100px;
      text-align: right;
      color: #fff;
      font-size: 16px;
    }
    .header_right {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 147px;
      height: 40px;
      background: #f8f5f5;
      text-align: center;
      line-height: 40px;
      border-radius: 6px;
      span {
        font-size: 14px;
        color: #332929;
      }
    }
  }
}
.work_right {
  width: 261px;
  // height: 451px;
  // border: 1px solid red;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  margin-left: 30px;
  border-radius: 12px;
  padding: 30px;
  .note {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .hr {
    width: 201px;
    height: 1px;
    background-color: #f5efee;
    margin-bottom: 15px;
  }
  .note_first {
    font-size: 13px;
    margin-top: 15px;
  }
  span {
    font-size: 12px;
    color: #887e7e;
  }
}
.enter-info {
  margin-top: 20px;
}
.stock-use {
  margin-top: 20px;
  display: flex;
  .stock-left {
    margin-right: 30px;
  }
}
</style>
