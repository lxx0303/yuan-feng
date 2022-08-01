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
              <div class="text">交接编号</div>
              <el-input placeholder="请输入"> </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">出库编号</div>
              <el-input placeholder="请输入"> </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">承运商</div>
              <el-select
                v-model="value"
                placeholder="请输入"
                style="width: 300px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
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

    <!-- 列表 -->
    <el-card style="margin-top: 20px">
      <el-table stripe :data="taskList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="code" label="交接编号" width="160">
        </el-table-column>
        <el-table-column prop="outboundCode" label="出库编号" width="160">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          sortable
          width="160"
        >
        </el-table-column>
        <el-table-column prop="createName" label="创建人" width="160">
        </el-table-column>
        <el-table-column prop="carrierName" label="承运商" width="160">
        </el-table-column>
        <el-table-column prop="billCode" label="运单号" width="160">
        </el-table-column>
        <el-table-column prop="" label="交接状态" width="160">
        </el-table-column>
        <el-table-column prop="handoverName" label="交接员" width="160">
        </el-table-column>
        <el-table-column
          prop="updateTime"
          label="交接完成时间"
          sortable
          width="160"
        >
        </el-table-column>
        <el-table-column prop="driverName" label="交接司机" width="160">
        </el-table-column>
        <el-table-column prop="driverPhone" label="交接司机电话" width="160">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="160">
          <template>
            <el-button type="text" size="small">分配</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="center" style="margin-top: 20px">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Header from "@/compoents/Header.vue";
import { getTaskList } from "@/api/jiaojierenwu";

export default {
  components: { Header },
  data() {
    return {
      value: "",
      // 总条数
      total: 10,
      // 页数
      pageSize: 10,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      taskList: [],
      currentPage4: 1,
    };
  },
  created() {
    this.onTaskList();
  },
  methods: {
    handleSizeChange(val) {
      console.log(val);
    },
    handleCurrentChange(val) {
      console.log(val);
    },
    async onTaskList() {
      const data = await getTaskList();
      this.taskList = data.data.data.records;
    },
  },
};
</script>

<style scoped lang="less">
.ckBtn {
  background: #00be76;
  color: #fff;
  margin-bottom: 20px;
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
</style>
