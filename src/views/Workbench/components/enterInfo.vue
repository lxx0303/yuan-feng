<template>
  <div>
    <el-card class="header-msg">
      <div class="header-info">
        <span>入库/出库信息</span>
        <el-button-group class="btns-bgc">
          <el-button
            :type="dimension == 'w' ? 'primary' : 'info'"
            size="middle"
            @click="dimension = 'w'"
            >本周</el-button
          >
          <el-button
            :type="dimension == 'e' ? 'primary' : 'info'"
            size="middle"
            @click="dimension = 'e'"
            >本月</el-button
          >
          <el-button
            :type="dimension == 'c' ? 'primary' : 'info'"
            size="middle"
            @click="dimension = 'c'"
            >全年</el-button
          >
        </el-button-group>
      </div>
      <!-- 图标 -->
      <div v-if="(checked = true)">
        <DateChart :dimension="dimension"></DateChart>
      </div>
    </el-card>
  </div>
</template>

<script>
import DateChart from "@/views/Workbench/components/enter-charts/date-chart.vue";

export default {
  components: { DateChart },
  data() {
    return {
      checked: false,
      dimension: "w",
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
.header-info {
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
}
.el-button--info {
  background-color: #fff;
  color: #333;
  border-color: #eee;
}
.el-button--primary {
  background-color: #ffb200;
  color: #fff;
  border-color: #ffb200;
}
</style>
