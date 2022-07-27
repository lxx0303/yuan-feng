<template>
  <div id="date-chart"></div>
</template>

<script>
import { getTiaoChart } from "@/api/home";

import * as echarts from "echarts";
export default {
  props: {
    dimension: {
      type: String,
      default: "w",
    },
  },
  data() {
    return {
      tiaoChart: [],
      dimensionStr: "",
    };
  },
  watch: {
    dimension: {
      handler(val) {
        console.log();
        this.dimensionStr = val;
        this.onTiaoChart();
      },
      immediate: true,
    },
  },
  methods: {
    async onTiaoChart() {
      const { data } = await getTiaoChart({ dimension: this.dimensionStr });
      this.tiaoChart = data.data;
      this.initChart();
      console.log(this.tiaoChart, "条形");
    },
    initChart() {
      this.$nextTick(() => {
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
              data: this.tiaoChart.x,
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
              name: "入库",
              type: "bar",
              barWidth: "35%",
              barGap: "0%",
              itemStyle: {
                color: "#ff7100",
              },
              data: this.tiaoChart.data[0].data,
            },
            {
              name: "出库",
              type: "bar",
              barWidth: "35%",
              itemStyle: {
                color: "#ffb200",
              },
              data: this.tiaoChart.data[1].data,
            },
          ],
        });
      });
    },
  },
};
</script>

<style scoped lang="less">
#date-chart {
  height: 500px;
}
</style>
