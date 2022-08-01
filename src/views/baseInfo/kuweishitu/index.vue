<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <div class="card-box">
      <el-card class="card-left">
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          label-position="top"
        >
          <el-form-item label="活动区域">
            <el-select
              v-model="form.region"
              placeholder="请选择活动区域"
              style="width: 200px"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="select-box">
          <el-input
            placeholder="请输入入库名称"
            class="input-select"
            style="width: 150px"
            suffix-icon="el-icon-search"
          >
          </el-input>
          <div>
            <ul class="infinite-list">
              <li class="btn-list">出库缓存区</li>
              <li class="btn-list">入库缓存区</li>
              <li class="btn-list">冻结区</li>
              <li class="btn-list">存储区</li>
              <li class="btn-list">测试</li>
            </ul>
          </div>
        </div>
      </el-card>
      <el-card class="card-right">
        <el-row :gutter="20">
          <el-col :span="4"><div class="kqzl">库区总览</div></el-col>
          <el-col :span="16" class="logo">
            <div class="sta">库存总计：<span>7</span></div>
            <div class="sta">
              <div class="xfk xfk-one"></div>
              停用车位:<span>1</span>
            </div>
            <div class="sta">
              <div class="xfk xfk-two"></div>
              占用库位:<span>0</span>
            </div>
            <div class="sta">
              <div class="xfk xfk-three"></div>
              空闲库位:<span>5</span>
            </div>
          </el-col>
        </el-row>
        <div class="dfk-box">
          <div class="dfk"></div>
          <div class="dfk"></div>
          <div class="dfk"></div>
          <div class="dfk"></div>
          <div class="dfk"></div>
          <div class="dfk"></div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Header from "@/compoents/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      form: {
        region: "",
      },
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped lang="less">
li {
  list-style: none;
}
.card-box {
  display: flex;
  .card-left {
    width: 263px;
    padding-left: 20px;
  }
  .select-box {
    width: 200px;
    height: 350px;
    background-color: #fdfcf9;
    border: 1px solid #f7f2f1;
    border-radius: 8px;
  }
  .input-select {
    margin: 20px 25px;
  }
  .card-right {
    width: 950px;
    margin-left: 15px;
  }
}

.btn-list {
  width: 140px;
  height: 40px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 6px 0 rgb(255 178 0 / 40%);
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: #ffb200;
  line-height: 40px;
  cursor: pointer;
  margin: 0 0 20px -10px;
}
.kqzl {
  font-size: 16px;
}
.logo {
  display: flex;
  .sta {
    margin-right: 60px;
    font-size: 14px;
    color: #333;
    display: flex;
  }
  .xfk {
    width: 13px;
    height: 13px;
    margin-right: 10px;
    margin-top: 3px;
    border-radius: 3px;
  }
  .xfk-one {
    background-color: #c3c3c3;
  }
  .xfk-two {
    background-color: #00be76;
  }
  .xfk-three {
    background-color: #b2dccc;
  }
}
.dfk-box {
  display: flex;
  margin-top: 20px;
  .dfk {
    width: 40px;
    height: 40px;
    background-color: #b2dccc;
    margin-right: 15px;
    border-radius: 8px;
  }
}
</style>
