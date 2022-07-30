<template>
  <div>
    <Header></Header>
    <el-card>
      <!-- 第一行 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        label-position="top"
        :inline="true"
      >
        <el-form-item label="库区编号" prop="code">
          <el-input
            v-model="ruleForm.code"
            style="width: 270px"
            placeholder="请输入仓库编号"
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="所属仓库" prop="warehouseName">
          <el-select
            v-model="ruleForm.warehouseId"
            placeholder="请选择所属仓库"
            style="width: 270px"
          >
            <el-option
              v-for="item in suoshuCngkuPtion"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="库区名称" prop="name">
          <el-input
            v-model="ruleForm.name"
            style="width: 270px"
            placeholder="请输入仓库名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="温度类型" prop="temperatureType">
          <el-select
            v-model="ruleForm.temperatureType"
            placeholder="请选择温度类型"
            style="width: 270px"
          >
            <el-option
              v-for="item in temperatureOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <!-- 第二行 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        label-position="top"
        :inline="true"
      >
        <el-form-item label="承重类型" prop="bearingType">
          <el-select
            v-model="ruleForm.bearingType"
            placeholder="请选择承重类型"
            style="width: 270px"
          >
            <el-option
              v-for="item in bearOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用途属性" prop="useType">
          <el-select
            v-model="ruleForm.useType"
            placeholder="请选择用途属性"
            style="width: 270px"
          >
            <el-option
              v-for="item in useTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人" prop="personName">
          <el-input
            v-model="ruleForm.personName"
            style="width: 270px"
            placeholder="请输入负责人姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input
            v-model="ruleForm.phone"
            style="width: 270px"
            placeholder="请输入联系电话"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- 库区状态 -->
      <el-row style="margin-top: 20px">
        <div class="text">库区状态</div>
        <el-radio-group v-model="radio" style="margin-top: 20px">
          <el-radio :label="1">启用</el-radio>
          <el-radio :label="0">停用</el-radio>
        </el-radio-group>
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
  updateCangku,
  updateCurrentInfo,
  updateStatus,
  addCangkuInfo,
  addSumbit,
} from "@/api/kuquguanli";

export default {
  components: { Header },
  data() {
    return {
      ruleForm: {
        code: "",
        warehouseName: "",
        name: "",
        temperatureType: "",
        // 第二行
        bearingType: "",
        useType: "",
        personName: "",
        phone: "",
        warehouseId: "",
      },
      rules: {
        code: [{ required: true, message: "请输入库区编号", trigger: "blur" }],
        warehouseName: [
          { required: true, message: "请选择所属仓库", trigger: "blur" },
        ],
        name: [{ required: true, message: "请输入库区名称", trigger: "blur" }],
        temperatureType: [
          { required: true, message: "请选择温度类型", trigger: "blur" },
        ],
        // 第二行
        bearingType: [
          { required: true, message: "请选择承重类型", trigger: "blur" },
        ],
        useType: [
          { required: true, message: "请选择用途属性", trigger: "blur" },
        ],
        personName: [
          { required: true, message: "请输入负责人名", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "联系电话格式不正确",
            trigger: "blur",
          },
        ],
      },
      radio: 1,
      // 仓库状态
      currentStatus: 1,
      // 所属仓库
      // suoshuCangku: {},
      suoshuCngkuPtion: [],

      // 温度类型
      temperatureOptions: [
        {
          value: "CW",
          label: "常温",
        },
        {
          value: "LC",
          label: "冷藏",
        },
        {
          value: "HW",
          label: "恒温",
        },
      ],

      // 用途属性
      useTypeOptions: [
        {
          value: "RKHCQ",
          label: "入库缓存区",
        },
        {
          value: "CKHCQ",
          label: "出库缓存区",
        },
        {
          value: "CCQ",
          label: "存储区",
        },
        {
          value: "FJQ",
          label: "分拣区",
        },
        {
          value: "ZJQ",
          label: "质检区",
        },
      ],
      // 承重类型
      bearOptions: [
        {
          value: "ZX",
          label: "重型",
        },
        {
          value: "OX",
          label: "中型",
        },
        {
          value: "QX",
          label: "轻型",
        },
      ],
      // 编辑信息
      editList: [],
    };
  },
  created() {
    this.onCkLive();
    this.onUpdateCurrentInfo();
  },
  methods: {
    back() {
      this.$router.back();
    },
    async onCkLive() {
      const { data } = await updateCangku({
        status: this.currentStatus,
      });
      this.suoshuCngkuPtion = data.data;
      console.log(data);
    },

    // 初始化
    async onUpdateCurrentInfo() {
      if (this.$route.query.id) {
        const { data } = await updateCurrentInfo(this.$route.query.id);
        console.log(data, "初始化");
        this.ruleForm = data.data;
      } else {
        const { data } = await addCangkuInfo();
        console.log(data, "新增");
        this.ruleForm.code = data.data;
      }
    },
    // 提交
    async submit() {
      if (this.$route.query.id) {
        const { data } = await updateStatus(this.ruleForm);
        console.log(data);
        this.editList = data.data;
        console.log(this.editList, 11);
        this.$message.success("编辑成功");
        this.$router.back();
      } else {
        const { data } = await addSumbit(this.ruleForm);
        console.log(data, "提交");
        this.$message.success("新增成功");
        this.$router.back();
      }
    },
  },
};
</script>

<style scoped lang="less">
.demo-ruleForm {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.text {
  font-size: 14px;
  color: #606266;
}
.text::before {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
.line {
  margin: 30px 0;
  width: 100%;
  height: 1px;
  background-color: #eee;
}
</style>
