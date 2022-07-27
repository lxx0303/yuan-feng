<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <!-- 搜索部分 -->
    <div>
      <el-card>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">仓库编号</div>
              <el-input v-model="input" placeholder="请输入"> </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">仓库名称</div>
              <el-input v-model="input" placeholder="请输入"> </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">仓库状态</div>
              <el-input v-model="input" placeholder="请输入"> </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content fcc btns">
              <el-button type="warning" round>搜索</el-button>
              <el-button round>重置</el-button>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <!-- 列表部分 -->
    <div class="list">
      <el-card>
        <!-- 新增按钮 -->
        <div>
          <el-button class="ckBtn" size="medium" type="success" round>
            新增仓库
          </el-button>
        </div>
        <div>
          <el-descriptions direction="vertical" :column="13" border>
            <el-descriptions-item label="序号"
              >kooriookami</el-descriptions-item
            >
            <el-descriptions-item label="仓库编码"
              >18100000000</el-descriptions-item
            >
            <el-descriptions-item label="仓库名称" :span="1"
              >苏州市</el-descriptions-item
            >
            <el-descriptions-item label="仓库类型" :span="1"
              >苏州市</el-descriptions-item
            >
            <el-descriptions-item label="省/市/区" :span="1"
              >苏州市</el-descriptions-item
            >
            <el-descriptions-item label="详细地址" :span="1"
              >苏州市</el-descriptions-item
            >
            <el-descriptions-item label="仓库状态" :span="1"
              >苏州市</el-descriptions-item
            >
            <el-descriptions-item label="仓库面积㎡" :span="1"
              >苏州市</el-descriptions-item
            >
            <el-descriptions-item label="库区数量" :span="1"
              >苏州市</el-descriptions-item
            >
            <el-descriptions-item label="负责人" :span="1"
              >苏州市</el-descriptions-item
            >
            <el-descriptions-item label="联系电话" :span="1"
              >苏州市</el-descriptions-item
            >
            <el-descriptions-item label="更新时间" :span="1"
              >苏州市</el-descriptions-item
            >
            <el-descriptions-item label="操作" :span="1"
              >苏州市</el-descriptions-item
            >
          </el-descriptions>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Header from "@/compoents/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style scoped lang="less">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
// 文字
.text {
  font-size: 12px;
  color: #887e7e;
  margin-bottom: 10px;
}
// 按钮
.btns {
  margin-top: 20px;
}

.el-button--warning {
  background-color: #ffb200;
  border: 0;
}

// 列表部分
.list {
  margin-top: 20px;
  .ckBtn {
    background: #00be76;
    color: #fff;
    margin-bottom: 20px;
  }
}
</style>
