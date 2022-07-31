<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <el-card>
      <el-row style="margin-top: 20px" :gutter="20">
        <el-form
          :model="editList"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
        >
          <!-- 第一行、第二行 -->
          <el-row>
            <el-col :span="6">
              <el-form-item label="库区" prop="warehouseName">
                <el-select v-model="kuquList.name" placeholder="请选择库区">
                  <el-option
                    v-for="item in kuquOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="库位编号" prop="code">
                <el-input
                  v-model="editList.code"
                  style="width: 270px"
                  :disabled="true"
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="库位名称" prop="name">
                <el-input
                  v-model="editList.name"
                  style="width: 270px"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="温度类型" prop="temperatureType">
                <el-select
                  v-model="editList.temperatureType"
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
            </el-col>
            <!-- 第二行 -->
            <el-col :span="6">
              <el-form-item label="承重类型" prop="bearingType">
                <el-select
                  v-model="editList.bearingType"
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
            </el-col>
            <el-col :span="6">
              <el-form-item label="用途属性" prop="useType">
                <el-select
                  v-model="editList.useType"
                  placeholder="请选择活动区域"
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
            </el-col>
            <el-col :span="12">
              <el-form-item label="停用状态" prop="status">
                <el-radio-group v-model="editList.status">
                  <el-radio label="0">启用</el-radio>
                  <el-radio label="1">停用</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 第三行 -->
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="承载体积" prop="maxVolume">
                <el-input
                  v-model="editList.maxVolume"
                  placeholder="请输入"
                  style="width: 270px"
                >
                  <template slot="append">m³</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="承载上限" prop="maxNum">
                <el-input
                  v-model="editList.maxNum"
                  placeholder="请输入"
                  style="width: 270px"
                >
                  <el-button slot="append" icon="el-icon-top"></el-button>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="承载重量" prop="maxWeight">
                <el-input
                  v-model="editList.maxWeight"
                  placeholder="请输入"
                  style="width: 270px"
                >
                  <template slot="append">Kg</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 第四行 -->
          <el-row :gutter="20">
            <el-col :span="4">
              <el-form-item label="库位/排" prop="locationRow">
                <el-input
                  v-model="editList.locationRow"
                  placeholder="请输入"
                  style="width: 160px"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="库位/列" prop="locationColumn">
                <el-input
                  v-model="editList.locationColumn"
                  placeholder="请输入"
                  style="width: 160px"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="库位/层" prop="locationLayer">
                <el-input
                  v-model="editList.locationLayer"
                  placeholder="请输入"
                  style="width: 160px"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="库位/长" prop="locationLength">
                <el-input
                  v-model="editList.locationLength"
                  placeholder="请输入"
                  style="width: 160px"
                >
                  <template slot="append">cm</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="库位/宽" prop="locationWidth">
                <el-input
                  v-model="editList.locationWidth"
                  placeholder="请输入"
                  style="width: 160px"
                >
                  <template slot="append">cm</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="库位/高" prop="locationHigh">
                <el-input
                  v-model="editList.locationHigh"
                  placeholder="请输入"
                  style="width: 160px"
                >
                  <template slot="append">cm</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
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
  editCurrentKuwei,
  changeKuwei,
  addData,
  addSubmit,
} from "@/api/kuweiguanli";
// import login from "@/store/modules/login";

export default {
  compoents: { Header },
  data() {
    return {
      editList: {
        code: "",
        name: "",
        temperatureType: "",
        bearingType: "",
        useType: "",
        status: "",
        maxVolume: "",
        maxNum: "",
        maxWeight: "",
        locationRow: "",
        locationColumn: "",
        locationLayer: "",
        locationLength: "",
        locationWidth: "",
        locationHigh: "",
        warehouseName: "",
      },
      rules: {
        name: [{ required: true, message: "请输入库位名称", trigger: "blur" }],
        temperatureType: [
          { required: true, message: "请选择温度类型", trigger: "blur" },
        ],
        bearingType: [
          {
            required: true,
            message: "请选择承重类型",
            trigger: "blur",
          },
        ],
        useType: [
          {
            required: true,
            message: "请选择用途属性",
            trigger: "blur",
          },
        ],
        status: [
          {
            required: true,
            message: "请选择停用状态",
            trigger: "blur",
          },
        ],
        maxVolume: [
          { required: true, message: "请输入承载体积", trigger: "blur" },
        ],
        region: [{ required: true, message: "请选择库区", trigger: "blur" }],
      },

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

      // 库区
      kuquStatus: 1,

      kuquList: {},
      kuquOptions: [],
    };
  },
  created() {
    this.onEditCurrentInfo();
    this.onChangeKuqu();
  },
  methods: {
    back() {
      this.$router.back();
    },
    async onChangeKuqu() {
      const data = await changeKuwei({ status: this.kuquStatus });
      console.log(data);
      this.kuquList = data.data;
    },
    // 获取当前需要编辑的页面数据
    async onEditCurrentInfo() {
      if (this.$route.query.id) {
        const { data } = await editCurrentKuwei(this.$route.query.id);
        this.editList = data.data;
        console.log(this.editList, "当前编辑的页面数据");
      } else {
        const { data } = await addData();
        this.editList.code = data.data;
      }
    },

    // 提交
    async submit() {
      const { data } = await addSubmit(this.editList);
      console.log(data, "新增的提交");
      this.$message.success("新增成功");
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="less">
.line {
  margin: 30px 0;
  width: 100%;
  height: 1px;
  background-color: #eee;
}
</style>
