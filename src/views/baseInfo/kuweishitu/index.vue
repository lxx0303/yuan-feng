<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <div class="card-box">
      <el-card class="card-left">
        <el-form ref="form" label-width="80px" label-position="top">
          <el-form-item label="活动区域">
            <el-select
              v-model="warehouseId"
              placeholder="请选择活动区域"
              style="width: 200px"
              @change="getAreaList"
            >
              <el-option
                v-for="item in warehouseList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="select-box">
          <el-input
            v-model="like_name"
            placeholder="请输入入库名称"
            class="input-select"
            style="width: 150px"
            suffix-icon="el-icon-search"
            @input="getAreaList"
          >
          </el-input>
          <div>
            <ul class="infinite-list">
              <li
                class="btn-list"
                :class="{ 'btn-list--active': areaId == item.id }"
                v-for="item in areaList"
                :key="item.id"
                @click.stop="onChangeArea(item.id)"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </el-card>
      <el-card class="card-right">
        <el-row :gutter="20">
          <el-col :span="4"><div class="kqzl">库区总览</div></el-col>
          <el-col :span="16" class="logo">
            <div class="sta">
              库存总计：<span>{{ overViewObj.total }}</span>
            </div>
            <div class="sta">
              <div class="xfk xfk-one"></div>
              停用车位:<span>{{ overViewObj.stop }}</span>
            </div>
            <div class="sta">
              <div class="xfk xfk-two"></div>
              占用库位:<span>{{ overViewObj.use }}</span>
            </div>
            <div class="sta">
              <div class="xfk xfk-three"></div>
              空闲库位:<span>{{ overViewObj.free }}</span>
            </div>
          </el-col>
        </el-row>
        <div class="dfk-box">
          <el-tooltip
            content="Bottom center"
            placement="bottom"
            effect="light"
            v-for="item in listDetail"
            :key="item.id"
          >
            <div
              class="dfk"
              :class="{
                'xfk-two': item.useStatus == 1,
                'xfk-one': item.useStatus == 2,
              }"
            ></div>
            <div slot="content" class="tooltip-box">
              <span><em>库位编号：</em>{{ item.code }}</span
              ><br /><br />
              <span><em>库位名称：</em>{{ item.name }}</span
              ><br /><br />
              <span
                ><em>库位位置：</em>{{ item.locationRow }}排{{
                  item.locationColumn
                }}列{{ item.locationLayer }}层</span
              ><br /><br />
              <span><em>库位状态：</em>{{ useStatus[item.useStatus] }}</span
              ><br /><br />
              <span><em>货品名称：</em>{{ item.goodsName }}</span
              ><br /><br />
              <span><em>货品数量：</em>{{ item.goodsTotal }}</span
              ><br />
            </div>
          </el-tooltip>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Header from "@/compoents/Header.vue";
import {
  getListDetail,
  getWarehouseList,
  getAreaList,
  getAreaOverview,
} from "@/api/kuweishitu";

export default {
  components: { Header },
  data() {
    return {
      warehouseId: "798976929725153313",
      listDetail: [],
      like_name: "",
      warehouseList: [],
      areaList: [],
      areaId: "798977362099175521",
      overViewObj: {},
      useStatus: ["空闲", "未满", "已满"],
    };
  },
  created() {
    this.getWarehouseList();
    this.getAreaList();
    this.getAreaOverview();
    this.getListDetail();
  },
  methods: {
    // 获取仓库数据
    async getWarehouseList() {
      const { data } = await getWarehouseList({ status: 1 });
      this.warehouseList = data.data;
    },
    // 获取区域数据
    async getAreaList() {
      const { data } = await getAreaList({
        warehouseId: this.warehouseId,
        like_name: this.like_name,
        status: 1,
      });
      this.areaList = data.data;
    },
    // 获取库区数量信息
    async getAreaOverview() {
      const { data } = await getAreaOverview(this.areaId);
      this.overViewObj = data.data;
    },
    // 页面方块数据
    async getListDetail() {
      const { data } = await getListDetail({ areaId: this.areaId });
      this.listDetail = data.data;
    },
    // 区域点击事件
    onChangeArea(id) {
      this.areaId = id;
      this.getAreaOverview();
      this.getListDetail();
    },
  },
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
.infinite-list {
  height: 250px;
  overflow: auto;
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
  &--active {
    background: #ffb200;
    color: #332929;
  }
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
}
.xfk-one {
  background-color: #c3c3c3 !important;
}
.xfk-two {
  background-color: #00be76 !important;
  &:hover {
    border: 2px solid #008a56;
  }
}
.xfk-three {
  background-color: #b2dccc;
  &:hover {
    border: 2px solid #7f7f7f;
  }
}
.dfk-box {
  box-sizing: border-box;
  display: flex;
  margin-top: 20px;
  .dfk {
    width: 40px;
    height: 40px;
    background-color: #b2dccc;
    margin-right: 15px;
    border-radius: 8px;
    &:hover {
      border: 2px solid #00be76;
    }
  }
}
.tooltip-box {
  span {
    margin: 10px 0;
  }
  em {
    font-style: normal;
    color: #888;
  }
}
// ::-webkit-scrollbar {
//   width: 6px;
// }
</style>
