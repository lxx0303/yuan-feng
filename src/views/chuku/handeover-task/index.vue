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
              <el-input v-model="inputNumber" placeholder="请输入"> </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">出库编号</div>
              <el-input v-model="inputCodeNumber" placeholder="请输入">
              </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">承运商</div>
              <el-input v-model="inputShang" placeholder="请输入"></el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content fcc btns">
              <el-button type="warning" round @click="onTaskList"
                >搜索</el-button
              >
              <el-button round @click="resetClick">重置</el-button>
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
        <el-table-column
          prop="status"
          label="交接状态"
          width="160"
          column-key="value"
          :filters="[
            { text: '新建', value: '1' },
            { text: '交接中', value: '2' },
            { text: '交接完成', value: '3' },
          ]"
          :filter-method="filterHandler"
        >
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
            <el-button type="text" size="small" @click="dialogVisible = true"
              >分配</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
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
    <!-- 弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>
        <el-form ref="form" label-width="80px">
          <el-form-item label="负责人" style="margin-left: 50px">
            <el-select placeholder="请选择活动区域">
              <el-option></el-option>
              <el-option></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Header from "@/compoents/Header.vue";
import { getTaskList } from "@/api/jiaojierenwu";

export default {
  components: { Header },
  data() {
    return {
      taskList: [],

      value: "",
      // 总条数
      total: 0,
      // 页数
      pageSize: 10,
      // 当前页面
      currentPage4: 1,

      // 交接状态
      statusSelect: [
        {
          value: "1",
          label: "新建",
        },
        {
          value: "2",
          label: "交接中",
        },
        {
          value: "3",
          label: "交接完成",
        },
      ],

      // 搜索-交接编号
      inputNumber: "",
      // 搜索-出库编号
      inputCodeNumber: "",
      // 搜索-承运商
      inputShang: "",

      // 弹窗
      dialogVisible: false,

      //
    };
  },
  created() {
    this.onTaskList();
  },
  methods: {
    // 页面显示条数
    handleSizeChange(val) {
      console.log(val);
      this.onTaskList();
    },
    // 切换页面
    handleCurrentChange(val) {
      console.log(val);
      this.onTaskList();
    },
    // 页面总数居
    async onTaskList() {
      const { data } = await getTaskList({
        size: this.pageSize,
        current: this.currentPage4,
        status: this.statusSelect,
        code: this.inputNumber,
        outboundCode: this.inputCodeNumber,
        carrierName: this.inputShang,
      });
      this.taskList = data.data.records;
      this.total = +data.data.total;
    },
    // 交接状态-下拉框
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    // 分配弹窗
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    // 重置
    resetClick() {
      this.inputNumber = "";
      this.inputCodeNumber = "";
      this.inputShang = "";
      this.onTaskList();
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
