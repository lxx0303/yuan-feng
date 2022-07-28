<template>
  <div>
    <Header></Header>
    <el-card>
      <el-row style="margin-top: 20px" :gutter="20">
        <el-col :span="8">
          <div class="grid-content">
            <div class="text">仓库编号</div>
            <el-input placeholder="请输入"> </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="text">仓库名称</div>
            <el-input placeholder="请输入"> </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="text">仓库名称</div>
            <el-input placeholder="请输入"> </el-input>
          </div>
        </el-col>
      </el-row>
      <!-- 详细地址 -->
      <el-row style="margin-top: 40px" type="flex">
        <el-col>
          <div class="grid-content">
            <div class="text">详细地址</div>
            <el-input placeholder="请输入" style="width: 650px"> </el-input>
          </div>
        </el-col>
        <el-col style="margin-left: 20px">
          <div class="text">仓库状态</div>
          <el-radio v-model="radio" label="1">启用</el-radio>
          <el-radio v-model="radio" label="2">停用</el-radio>
        </el-col>
      </el-row>
      <!-- 第三行 -->
      <el-row style="margin-top: 40px" :gutter="20">
        <el-col :span="8">
          <div class="grid-content">
            <div class="text">仓库面积</div>
            <el-input placeholder="请输入">
              <template slot="append">m³</template>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="text">负责人</div>
            <el-input placeholder="请输入"> </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="text">联系电话</div>
            <el-input placeholder="请输入"> </el-input>
          </div>
        </el-col>
      </el-row>
      <div class="line"></div>
      <el-row type="flex" justify="center">
        <el-button round @click="back">返回</el-button>
        <el-button type="warning" round>提交</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Header from "@/compoents/Header.vue";
export default {
  props: {
    currentId: {
      type: String,
    },
  },
  components: { Header },
  data() {
    return {
      radio: "1",
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="less">
// 文字
.text {
  font-size: 12px;
  color: #887e7e;
  margin-bottom: 10px;
}
.line {
  margin: 30px 0;
  width: 100%;
  height: 1px;
  background-color: #eee;
}
</style>
