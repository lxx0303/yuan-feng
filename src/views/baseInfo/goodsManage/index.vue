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
              <div class="text">货品编号</div>
              <el-input v-model="inputGoodsCode" placeholder="请输入">
              </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">货品名称</div>
              <el-input v-model="inputGoodsName" placeholder="请输入">
              </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="text">货主名称</div>
              <el-input v-model="inputPersonName" placeholder="请输入">
              </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content fcc btns">
              <el-button type="warning" round @click="onGoodsInfo"
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
          新增货品
        </el-button>
      </div>
      <el-table stripe :data="goodsList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="goodsTypeName" label="货品类型名称" width="160">
        </el-table-column>
        <el-table-column prop="ownerCode" label="货品编号" width="160">
        </el-table-column>
        <el-table-column prop="barCode" label="货品条码" width="160">
        </el-table-column>
        <el-table-column prop="name" label="货品名称" width="160">
        </el-table-column>
        <el-table-column prop="ownerName" label="货主名称" width="160">
        </el-table-column>
        <el-table-column label="质检方式" width="160">
          <template v-slot="{ row }">{{
            inspType[row.inspectionType]
          }}</template>
        </el-table-column>
        <el-table-column label="温度要求" width="160">
          <template v-slot="{ row }">
            {{ temperature[row.temperatureType] }}
          </template>
        </el-table-column>
        <el-table-column label="承重要求" width="160">
          <template v-slot="{ row }">
            {{ bearing[row.bearingType] }}
          </template>
        </el-table-column>
        <el-table-column prop="areaName" label="指定库区" width="160">
        </el-table-column>
        <el-table-column prop="volume" label="体积m³" width="160">
        </el-table-column>
        <el-table-column prop="price" label="单价（元）" width="160">
        </el-table-column>
        <el-table-column prop="unit" label="单位" width="160">
        </el-table-column>
        <el-table-column prop="guaranteeDay" label="保质天数（天）" width="160">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="160">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="160">
          <template v-slot="{ row }">
            <el-button
              type="text"
              size="small"
              @click="editClick(row.id, row.ownerId)"
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
import { getGoodsInfo } from "@/api/goodsManage";

export default {
  components: { Header },
  data() {
    return {
      // 货品数据
      goodsList: [],
      // 质检方式
      inspType: {
        BCL: "不处理",
        QJ: "全检",
        CJ: "抽检",
      },
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

      value: "",
      // 总条数
      total: 0,
      // 页面显示条数
      pageSize: 10,
      currentPage4: 1,

      // 搜索
      // 货品编号
      inputGoodsCode: "",
      // 货品名称
      inputGoodsName: "",
      // 货主名称
      inputPersonName: "",
    };
  },
  created() {
    this.onGoodsInfo();
  },
  methods: {
    handleSizeChange(val) {
      console.log(val);
    },
    handleCurrentChange(val) {
      console.log(val);
    },
    // 货品管理数据
    async onGoodsInfo() {
      const { data } = await getGoodsInfo({
        size: this.pageSize,
        current: this.currentPage4,
        total: this.total,
        ownerCode: this.inputGoodsCode,
        name: this.inputGoodsName,
        ownerName: this.inputPersonName,
      });
      console.log(data);
      this.goodsList = data.data.records;
      this.total = +data.data.total;
      console.log(this.goodsList);
    },
    // 重置
    resetClick() {
      this.inputGoodsCode = "";
      this.inputGoodsName = "";
      this.inputPersonName = "";
      this.onGoodsInfo();
    },
    // 编辑
    editClick(id, ownerId) {
      this.$router.push({
        name: "goodsedit",
        query: {
          id,
          ownerId,
        },
      });
      console.log(ownerId);
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
