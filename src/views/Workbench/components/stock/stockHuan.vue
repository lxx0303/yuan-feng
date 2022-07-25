<template>
  <div>
    <el-card>
      <div class="header-msg">
        <span>库存使用情况</span>
      </div>
      <div id="echarts_box"></div>
    </el-card>
  </div>
</template>

<script>
// import * as echarts from "echarts";
export default {
  mounted() {
    // // 基于准备好的dom，初始化echarts实例
    // let myChart = echarts.init(document.getElementById("echarts_box"));
    // // 绘制图表
    // myChart.setOption({
    //   title: {
    //     text: "ECharts 入门示例",
    //   },
    //   tooltip: {},
    //   xAxis: {
    //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //       name: "销量",
    //       type: "bar",
    //       data: [5, 20, 36, 10, 10, 20],
    //     },
    //   ],
    // });
  },
};
</script>

<style scoped lang="less">
.header-msg {
  font-size: 16px;
  font-weight: 700;
}
#echarts_box {
  width: 500px;
  height: 500px;
}
</style>
