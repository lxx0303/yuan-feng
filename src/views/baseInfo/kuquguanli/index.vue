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
                v-model="currentStatus"
                placeholder="请输入"
                style="width: 300px"
                @change="changeStatusClick"
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
              <el-button type="warning" round @click="onKuquManage"
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
      <!-- 新增按钮 -->
      <div>
        <el-button
          class="ckBtn"
          size="medium"
          type="success"
          round
          @click="addClick"
        >
          新增仓库
        </el-button>
        <el-button class="huise" size="medium" round> 下载库区模板 </el-button>
        <el-button class="huise" size="medium" round> 导入库区信息 </el-button>
      </div>
      <el-table stripe :data="kuquManageInfo" border style="width: 100%">
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="warehouseName" label="所属仓库" width="160">
        </el-table-column>
        <el-table-column prop="code" label="库区编号" width="160">
        </el-table-column>
        <el-table-column prop="name" label="库区名称" width="160">
        </el-table-column>
        <el-table-column label="温度类型" width="160">
          <template v-slot="{ row }">
            {{ temperature[row.temperatureType] }}
          </template>
        </el-table-column>
        <el-table-column label="承重类型" width="160">
          <template v-slot="{ row }">
            {{ bearing[row.bearingType] }}
          </template>
        </el-table-column>
        <el-table-column label="用途属性" width="160">
          <template v-slot="{ row }">
            {{ usetype[row.useType] }}
          </template>
        </el-table-column>
        <el-table-column label="库区状态" width="160">
          <template v-slot="{ row }">
            {{ kqStatus[row.status] }}
          </template>
        </el-table-column>
        <el-table-column prop="personName" label="负责人" width="160">
        </el-table-column>
        <el-table-column prop="phone" label="联系电话" width="160">
        </el-table-column>
        <el-table-column prop="includedNum" label="库位数量" width="160">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="160">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="160">
          <template v-slot="{ row }">
            <el-button type="text" size="small" @click="editClick(row.id)"
              >编辑</el-button
            >
            <el-button
              type="text"
              size="small"
              @click="open(row.id, row.status, row.name)"
              >{{ row.status == 0 ? "启用" : "停用" }}</el-button
            >
            <el-button type="text" size="small" @click="del">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-row type="flex" justify="center" style="margin-top: 20px">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
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
import { getAreaListInfo, updateStatus } from "@/api/kuquguanli";

export default {
  components: { Header },
  data() {
    return {
      // 列表数据
      kuquManageInfo: [],
      // 温度类型
      temperature: {
        CW: "常温",
        LC: "冷藏",
        HW: "恒温",
      },
      // 承重类型
      bearing: {
        ZX: "重型",
        OX: "中型",
        QX: "轻型",
      },
      // 用途类型
      usetype: {
        RKHCQ: "入库缓存区",
        CKHCQ: "出库缓存区",
        CCQ: "存储区",
        FJQ: "分拣区",
        ZJQ: "质检区",
      },
      // 库区状态
      kqStatus: {
        0: "停用",
        1: "启用",
      },
      // 删除
      ids: "",

      // 总条数(可以控制切换页面)
      total: 0,
      // 页面显示条数
      pageSize: 10,
      // 当前页
      currentPage: 1,
      // 搜索部分-仓库状态
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
      currentStatus: "",
      // 搜索-仓库名称
      inputName: "",
      // 搜索-仓库编号
      inputNumber: "",
    };
  },
  created() {
    this.onKuquManage();
  },
  methods: {
    // 页面条数
    handleSizeChange(val) {
      console.log(val);
      this.pageSize = val;
      this.onKuquManage();
    },
    // 页面切换
    handleCurrentChange(val) {
      console.log(val);
      this.currentPage = val;
      this.onKuquManage();
    },
    // 获取列表信息
    async onKuquManage() {
      const { data } = await getAreaListInfo({
        current: this.currentPage,
        size: this.pageSize,
        name: this.inputName,
        status: this.currentStatus,
        code: this.inputNumber,
      });
      // console.log(data, "库区管理列表");
      this.kuquManageInfo = data.data.records;
      this.total = +data.data.total;
      console.log(this.kuquManageInfo, "list");
    },
    // 状态提示
    open(id, status, name) {
      this.$confirm(`确定要停用${name}嘛?`, "确认是否停用", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await updateStatus({
            id,
            status: status == 0 ? 1 : 0,
          });
          this.$message({
            type: "success",
            message: "停用成功!",
          });
          this.onKuquManage();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消停用",
          });
        });
    },
    // 删除
    async del() {
      this.$notify({
        title: "提示",
        message: "演示系统，不支持此操作",
        type: "warning",
      });
    },
    // 搜索-状态
    changeStatusClick(val) {
      this.currentStatus = val;
    },
    // 重置
    resetClick() {
      this.currentStatus = "";
      this.inputName = "";
      this.inputNumber = "";
      this.onKuquManage();
    },
    // 编辑
    editClick(id) {
      this.$router.push({
        name: "kuquedit",
        query: {
          id,
        },
      });
    },
    // 新增
    addClick() {
      this.$router.push({
        name: "kuquedit",
      });
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
.huise {
  background-color: #f8f5f5;
  border: 0;
}
</style>
