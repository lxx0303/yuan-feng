<template>
  <div>
    <Header></Header>
    <el-card>
      <el-row style="margin-top: 20px" :gutter="20">
        <el-col :span="8">
          <div class="grid-content">
            <div class="text">仓库编号</div>
            <el-input
              v-model="currentList.code"
              placeholder="请输入"
              :disabled="true"
            >
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="text">仓库名称</div>
            <el-input v-model="currentList.name" placeholder="请输入">
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="text">仓库类型</div>
            <el-select v-model="currentList.type" placeholder="请输入">
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
      </el-row>
      <el-row style="margin-top: 40px" type="flex">
        <el-col>
          <div class="grid-content">
            <div class="text">省市区</div>
            <el-input
              v-model="currentList.location"
              placeholder="请输入"
              style="width: 650px"
            >
            </el-input>
          </div>
        </el-col>
      </el-row>
      <!-- 详细地址 -->
      <el-row style="margin-top: 40px" type="flex">
        <el-col>
          <div class="grid-content">
            <div class="text">详细地址</div>
            <el-input
              v-model="currentList.address"
              placeholder="请输入"
              style="width: 650px"
            >
            </el-input>
          </div>
        </el-col>
        <el-col style="margin-left: 20px">
          <div class="text">仓库状态</div>
          <el-radio-group v-model="currentList.status">
            <el-radio label="1">启用</el-radio>
            <el-radio label="0">停用</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <!-- 第三行 -->
      <el-row style="margin-top: 40px" :gutter="20">
        <el-col :span="8">
          <div class="grid-content">
            <div class="text">仓库面积</div>
            <el-input v-model="currentList.surface" placeholder="请输入">
              <template slot="append">m³</template>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="text">负责人</div>
            <el-input v-model="currentList.personName" placeholder="请输入">
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="text">联系电话</div>
            <el-input v-model="currentList.phone" placeholder="请输入">
            </el-input>
          </div>
        </el-col>
      </el-row>
      <div class="line"></div>
      <el-row type="flex" justify="center">
        <el-button round @click="back">返回</el-button>
        <el-button type="warning" round @click="submit">提交</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Header from "@/compoents/Header.vue";
import {
  getUpdateInfo,
  getSubmitInfo,
  getAddInfo,
  getAddSubmit,
} from "@/api/baseInfo";

export default {
  components: { Header },
  data() {
    return {
      currentList: {
        code: "",
        name: "",
        type: "",
        address: "",
        status: "1",
        surface: "",
        personName: "",
        phone: "",
        location: "",
        area: "140406",
        city: "140400",
        province: "140000",
      },
      options: [
        {
          value: "ZZ",
          label: "中转仓",
        },
        {
          value: "JG",
          label: "加工仓",
        },
        {
          value: "CB",
          label: "储备仓",
        },
        {
          value: "LC",
          label: "冷藏仓",
        },
      ],
      editList: [],
      //
    };
  },
  created() {
    this.onUpdateInfo();
  },
  methods: {
    back() {
      this.$router.back();
    },
    // 初始化
    async onUpdateInfo() {
      if (this.$route.query.id) {
        const { data } = await getUpdateInfo(this.$route.query.id);
        console.log(data, "修改信息");
        this.currentList = data.data;
      } else {
        const { data } = await getAddInfo();
        this.currentList.code = data.data;
      }
    },
    // 提交
    async submit() {
      // 编辑
      if (this.$route.query.id) {
        const { data } = await getSubmitInfo(this.currentList);
        console.log(data);
        console.log(this.currentList, "修改数据");
        this.editList = data.data;
        this.$message.success("编辑成功");
        this.$router.back();
      } else {
        // 新增
        const { data } = await getAddSubmit(this.currentList);
        console.log(data);
        this.$message.success("新增成功");
        this.$router.back();
      }
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
