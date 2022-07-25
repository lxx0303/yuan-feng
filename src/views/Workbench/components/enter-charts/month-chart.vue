<template>
  <div id="month-chart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("date-chart"));
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [0, 0.2, 0.4, 0.6, 0.8, 1],
        },
      ],
    });
  },
};
</script>

<style scoped lang="less">
#month-chart {
  height: 500px;
}
</style>
