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
import * as echarts from "echarts";
export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("echarts_box"));
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          type: "pie",
          radius: ["37%", "55%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "16",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 300, name: "冻结库存" },
            { value: 484, name: "可用库存" },
          ],
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
#echarts_box {
  width: 300px;
  height: 300px;
}
</style>
