<template>
  <div>
    <Header></Header>

    <el-card style="padding: 20px">
      <el-row style="margin-top: 20px" :gutter="20">
        <el-form
          :model="editList"
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
          :inline="true"
        >
          <!-- 第一行、第二行 -->
          <el-row>
            <el-col :span="6">
              <el-form-item label="货品编码" prop="code">
                <el-input
                  v-model="editList.code"
                  style="width: 280px"
                  placeholder="请输入货品编码"
                  disabled
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="货品类型" prop="name">
                <el-input
                  style="width: 280px"
                  placeholder="请输入货品类型"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="货品名称" prop="name">
                <el-input
                  v-model="editList.name"
                  style="width: 280px"
                  placeholder="请输入货品名称"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="货品条码" prop="barCode">
                <el-input
                  v-model="editList.barCode"
                  style="width: 280px"
                  placeholder="请输入货品条码"
                ></el-input>
              </el-form-item>
            </el-col>
            <!-- 第二行 -->
            <el-col :span="6">
              <el-form-item label="货主" prop="name">
                <el-input
                  style="width: 280px"
                  placeholder="请输入货主"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="质检方式" prop="inspectionType">
                <el-select
                  v-model="editList.inspectionType"
                  placeholder="请选择质检方式"
                  style="width: 280px"
                >
                  <el-option
                    v-for="item in inspectionOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="温度要求" prop="temperatureType">
                <el-select
                  v-model="editList.temperatureType"
                  placeholder="请选择温度要求"
                  style="width: 280px"
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
            <el-col :span="6">
              <el-form-item label="承重要求" prop="bearingType">
                <el-select
                  v-model="editList.bearingType"
                  placeholder="请选择承重要求"
                  style="width: 280px"
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
          </el-row>
          <!-- 第三、四行 -->
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="体积" prop="volume">
                <el-input
                  v-model="editList.volume"
                  style="width: 280px"
                  placeholder="请输入体积"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="指定库区" prop="useType">
                <el-select
                  v-model="kuquList.name"
                  placeholder="请选择指定库区"
                  style="width: 280px"
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
            <el-col :span="6">
              <el-form-item label="单价">
                <el-input
                  v-model="editList.price"
                  style="width: 280px"
                  placeholder="请输入单价"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="单位">
                <el-input
                  v-model="editList.unit"
                  style="width: 280px"
                  placeholder="请输入单位"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="保质天数">
                <el-input
                  v-model="editList.guaranteeDay"
                  style="width: 280px"
                  placeholder="请输入保质天数"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-row>
      <div class="line"></div>
      <el-row type="flex" justify="center">
        <el-button round @click="back">返回</el-button>
        <el-button type="warning" round>提交</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Header from "@/compoents/Header.vue";
import {
  editCurrentInfo,
  editCurrentKuquInfo,
  editCurrentPersonName,
} from "@/api/goodsManage";

export default {
  compoents: { Header },
  data() {
    return {
      editList: {
        code: "",
        name: "",
        barCode: "",
        inspectionType: "",
        temperatureType: "",
        bearingType: "",
        volume: "",
        price: "",
        unit: "",
        guaranteeDay: "",
        useType: "",
      },
      // 库区数据
      kuquList: {},

      rules: {
        code: [{ required: true, message: "请输入货品编码", trigger: "blur" }],
        temperatureType: [
          { required: true, message: "请选择温度类型", trigger: "blur" },
        ],
        bearingType: [
          { required: true, message: "请选择承重类型", trigger: "blur" },
        ],
        name: [{ required: true, message: "请输入货品名称", trigger: "blur" }],
        barCode: [
          { required: true, message: "请输入货品条码", trigger: "blur" },
        ],
        inspectionType: [
          { required: true, message: "请选择质检方式", trigger: "blur" },
        ],
        volume: [{ required: true, message: "请输入体积", trigger: "blur" }],
      },
      // 质检方式
      inspectionOptions: [
        {
          value: "BCL",
          label: "不处理",
        },
        {
          value: "QJ",
          label: "全检",
        },
        {
          value: "CJ",
          label: "抽检",
        },
      ],
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
      // 承重要求
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
      // 货主数据
      params: "",
      personList: [],
    };
  },
  created() {
    this.onEditCurrentInfo();
    this.onEditKuquInfo();
    this.onPersonName();
  },
  methods: {
    back() {
      this.$router.back();
    },
    // 当前页面的数据
    async onEditCurrentInfo() {
      const { data } = await editCurrentInfo(this.$route.query.id);
      console.log(data);
      this.editList = data.data;
      console.log(this.editList);
    },
    // 当前页面库区数据
    async onEditKuquInfo() {
      const { data } = await editCurrentKuquInfo({
        ownerId: this.$route.query.ownerId,
      });
      this.kuquList = data.data;
      console.log(this.kuquList, "库区");
    },
    // 当前页面货主的数据
    async onPersonName() {
      const { data } = await editCurrentPersonName({ params: this.params });
      this.personList = data.data;
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
