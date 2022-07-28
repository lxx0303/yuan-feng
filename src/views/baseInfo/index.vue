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
              <el-input v-model="inputNumber" placeholder="请输入"> </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">仓库名称</div>
              <el-input v-model="inputName" placeholder="请输入"> </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">仓库状态</div>
              <el-select
                v-model="currentStuts"
                placeholder="请输入"
                @change="changeClick"
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
              <el-button type="warning" round @click="onWarehoseInfo"
                >搜索</el-button
              >
              <el-button round @click="resetClick">重置</el-button>
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
          <el-button
            @click="editAddClick"
            class="ckBtn"
            size="medium"
            type="success"
            round
          >
            新增仓库
          </el-button>
        </div>
        <!-- 列表 -->
        <div>
          <el-table
            v-if="WarehoseInfo && WarehoseInfo.length"
            :data="WarehoseInfo"
            border
            style="width: 100%"
            :stripe="true"
          >
            <el-table-column type="index" label="序号" width="80">
            </el-table-column>
            <el-table-column prop="code" label="仓库编码" width="160">
            </el-table-column>
            <el-table-column prop="name" label="仓库名称" width="160">
            </el-table-column>
            <el-table-column label="仓库类型" width="160">
              <template slot-scope="scope">
                {{ type[scope.row.type] }}
              </template>
            </el-table-column>
            <el-table-column prop="location" label="省/市/区" width="200">
            </el-table-column>
            <el-table-column prop="address" label="详细地址" width="160">
            </el-table-column>
            <el-table-column label="仓库状态" width="160">
              <template slot-scope="scope">
                {{ statusObj[scope.row.status] }}
              </template>
            </el-table-column>
            <el-table-column prop="surface" label="仓库面积㎡" width="160">
            </el-table-column>
            <el-table-column prop="includedNum" label="库区数量" width="160">
            </el-table-column>
            <el-table-column prop="personName" label="负责人" width="160">
            </el-table-column>
            <el-table-column prop="phone" label="联系电话" width="160">
            </el-table-column>
            <el-table-column prop="updateTime" label="更新" width="160">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small"
                  @click.native="editAddClick(scope.row.id)"
                  :currentId="currentId"
                  >编辑</el-button
                >
                <el-button
                  type="text"
                  size="small"
                  @click="open(scope.row.name)"
                  >启用</el-button
                >
                <el-button type="text" size="small" @click="delClick"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 40, 50]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Header from "@/compoents/Header.vue";
import { getWarehouseInfo } from "@/api/baseInfo";
export default {
  components: { Header },
  data() {
    return {
      input: "",
      WarehoseInfo: [],
      options: [
        {
          value: "",
          label: "全部",
        },
        {
          value: "0",
          label: "停用",
        },
        {
          value: "1",
          label: "启用",
        },
      ],
      // 当前页
      currentPage4: 1,
      // 页数
      pageSize: 10,
      type: {
        ZZ: "中转仓",
        JG: "加工仓",
        CB: "储备仓",
        LC: "冷藏仓",
      },
      // 仓库状态
      statusObj: {
        0: "停用",
        1: "启用",
      },
      total: 0,

      // 搜索-仓库状态
      currentStuts: "",
      // 搜索-仓库名称
      inputName: "",
      // 搜索-仓库编号
      inputNumber: "",

      // 编辑的当前项的id
      currentId: "",
    };
  },
  created() {
    this.onWarehoseInfo();
  },
  methods: {
    // 页面条数
    handleSizeChange(val) {
      this.pageSize = val;
      this.onWarehoseInfo();
    },
    // 切换页面
    handleCurrentChange(val) {
      this.currentPage4 = val;
      this.onWarehoseInfo();
    },
    // 列表数据
    async onWarehoseInfo() {
      const { data } = await getWarehouseInfo({
        current: this.currentPage4,
        size: this.pageSize,
        status: this.currentStuts,
        name: this.inputName,
        code: this.inputNumber,
        id: this.currentId,
      });
      // console.log(data);
      this.WarehoseInfo = data.data.records;
      this.total = +data.data.total;
      console.log(this.WarehoseInfo, "仓库管理");
    },
    // 弹窗
    open(name) {
      this.$confirm(`确定要启用：${name}吗？`, "确认启用", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "启用成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消启用",
          });
        });
    },
    // 搜索
    changeClick(val) {
      this.currentStuts = val;
      console.log(val);
    },
    // 重置
    resetClick() {
      this.currentStuts = "";
      this.inputName = "";
      this.inputNumber = "";
      this.onWarehoseInfo();
    },
    // 删除
    delClick() {
      this.$notify({
        title: "提示",
        message: "演示系统，不支持此操作",
        type: "warning",
      });
    },
    // 编辑
    editAddClick(id) {
      this.$router.push({
        name: "editWarehouse",
      });
      this.currentId = id;
      this.onWarehoseInfo();
    },
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
// 分页
.block {
  display: flex;
  margin-top: 20px;
  justify-content: center;
}
</style>
