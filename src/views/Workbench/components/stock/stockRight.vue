<template>
  <div>
    <el-card>
      <div class="header-msg">
        <span>库存使用情况</span>
      </div>
      <div id="echarts-right"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("echarts-right"));
    // 绘制图表
    myChart.setOption({
      title: {
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "right",
      },
      series: [
        {
          type: "pie",
          radius: "70%",
          label: {
            show: false,
          },
          data: [
            { value: 348, name: "拣货区" },
            { value: 487, name: "出库区" },
            { value: 677, name: "暂存库区" },
            { value: 126, name: "进货暂存区" },
            { value: 298, name: "出货暂存区" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });
  },
};
</script>

<style scoped lang="less">
.header-msg {
  font-size: 16px;
  font-weight: 700;
}
#echarts-right {
  width: 850px;
  height: 300px;
}
</style>
