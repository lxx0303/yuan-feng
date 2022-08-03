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
              <div class="text">货主编号</div>
              <el-input v-model="inputCode" placeholder="请输入"> </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">货主名称</div>
              <el-input v-model="inputName" placeholder="请输入"> </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">联系人</div>
              <el-input v-model="inputPerson" placeholder="请输入"> </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content fcc btns">
              <el-button type="warning" round @click="onCargoOwnerInfo"
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
        <el-button class="ckBtn" size="medium" type="success" round>
          新增货主
        </el-button>
      </div>
      <el-table stripe :data="ownerList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="code" label="货主编号" width="160">
        </el-table-column>
        <el-table-column prop="name" label="货主名称" width="160">
        </el-table-column>
        <el-table-column prop="personName" label="联系人" width="160">
        </el-table-column>
        <el-table-column prop="phone" label="联系人电话" width="160">
        </el-table-column>
        <el-table-column prop="email" label="联系邮箱" width="160">
        </el-table-column>
        <el-table-column prop="location" label="省/市/区" width="160">
        </el-table-column>
        <el-table-column prop="address" label="详细地址" width="160">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="160">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="160">
          <template v-slot="{ row }">
            <el-button type="text" size="small">查看详情</el-button>
            <el-button type="text" size="small" @click="editClick(row.id)"
              >编辑</el-button
            >
            <el-button type="text" size="small">删除</el-button>
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
import { getCargoOwnerInfo } from "@/api/huozhuManage";

export default {
  components: { Header },
  data() {
    return {
      value: "",
      // 总条数
      total: 0,
      // 每页的条数
      pageSize: 10,
      currentPage4: 1,
      // 页面总数居
      ownerList: [],

      // 货主编码
      inputCode: "",
      // 货主名称
      inputName: "",
      // 联系人
      inputPerson: "",
    };
  },
  created() {
    this.onCargoOwnerInfo();
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.onCargoOwnerInfo();
      console.log(val);
    },
    handleCurrentChange(val) {
      this.currentPage4 = val;
      this.onCargoOwnerInfo();
      console.log(val);
    },

    // 货主管理数据
    async onCargoOwnerInfo() {
      const { data } = await getCargoOwnerInfo({
        size: this.pageSize,
        current: this.currentPage4,
        code: this.inputCode,
        name: this.inputName,
        personName: this.inputPerson,
      });
      this.ownerList = data.data.records;
      this.total = +data.data.total;
      console.log(this.ownerList);
    },
    // 重置
    resetClick() {
      this.inputCode = "";
      this.inputName = "";
      this.inputPerson = "";
      this.onCargoOwnerInfo();
    },

    // 编辑
    editClick(id) {
      this.$router.push({
        name: "huozhuedit",
        query: {
          id,
        },
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
</style>
