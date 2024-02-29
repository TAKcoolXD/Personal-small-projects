<template>
  <div class="Pos">
    <div>
      <!-- 布局 -->
      <el-row>
        <!-- 订单展示 -->
        <el-col :span='7' class="pos-order" id="order-list">
          <!-- 表格 -->
          <el-tabs>
            <!-- 点餐内容 -->
            <el-tab-pane label="点餐">
              <!-- 表格内容 -->
              <el-table :data="tableData" border style="width:100%">
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="count" label="量" width="50"></el-table-column>
                <el-table-column prop="price" label="金融" width="70"></el-table-column>
                <el-table-column label="操作" width="100" fixed="right">
                  <!-- 操作按钮增加和删除 -->
                  <template scope="scope">
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                    <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="shuliang">
                <span>数量{{ totalCount }}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>总价{{ totalMoney }}</span>
              </div>
              <div class="div-button">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger" @click="delAllGoods()">删除</el-button>
                <el-button type="success" @click="checkout()">结账</el-button>
              </div>
            </el-tab-pane>
            <!-- 挂单内容 -->
            <el-tab-pane label="挂单">
              挂单
            </el-tab-pane>
            <!-- 外卖内容 -->
            <el-tab-pane label="外卖">
              外卖
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <!--商品展示-->
        <el-col :span="17">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="(oftenGoodsItem, index) in oftenGoods" :key="oftenGoodsItem.goodsId"
                  @click="addOrderList(oftenGoodsItem)">
                  <span>{{ oftenGoodsItem.goodsName }}</span>
                  <span class="o-price">{{ oftenGoodsItem.price }}￥</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="goods-type">
            <!-- 商品导航 -->
            <el-tabs>
              <el-tab-pane label="汉堡">
                <div>
                  <ul class='cookList'>
                    <li v-for="(type0GoodsItem, index) in type0Goods" :key="type0GoodsItem.goodsId"
                      @click="addOrderList(type0GoodsItem)">
                      <span class="foodImg"><img :src=type0GoodsItem.goodsImg width="100%" height="118px"></span>
                      <span class="foodName">{{ type0GoodsItem.goodsName }}</span>
                      <span class="foodPrice">￥{{ type0GoodsItem.price }}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <div>
                  <ul class='cookList'>
                    <li v-for="(type1GoodsItem, index) in type1Goods" :key="type1GoodsItem.goodsId"
                      @click="addOrderList(type1GoodsItem)">
                      <span class="foodImg"><img :src=type1GoodsItem.goodsImg width="100%" height="118px"></span>
                      <span class="foodName">{{ type1GoodsItem.goodsName }}</span>
                      <span class="foodPrice">￥{{ type1GoodsItem.price }}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <div>
                  <ul class='cookList'>
                    <li v-for="(type2GoodsItem, index) in type2Goods" :key="type2GoodsItem.goodsId"
                      @click="addOrderList(type2GoodsItem)">
                      <span class="foodImg"><img :src=type2GoodsItem.goodsImg width="100%" height="118px"></span>
                      <span class="foodName">{{ type2GoodsItem.goodsName }}</span>
                      <span class="foodPrice">￥{{ type2GoodsItem.price }}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <div>
                  <ul class='cookList'>
                    <li v-for="(type3GoodsItem, index) in type3Goods" :key="type3GoodsItem.goodsId"
                      @click="addOrderList(type3GoodsItem)">
                      <span class="foodImg"><img :src=type3GoodsItem.goodsImg width="100%" height="118px"></span>
                      <span class="foodName">{{ type3GoodsItem.goodsName }}</span>
                      <span class="foodPrice">￥{{ type3GoodsItem.price }}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>



  </div>
</template>

<script>
import { oftenGoodsList, type0GoodsList } from '@/api/index'
export default {
  name: 'Pos',
  data() {
    return {
      // 表单数据
      tableData: [],
      //商品展示里的 常用商品数据
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalCount: 0,
      totalMoney: 0
    }
  },
  methods: {
    async getoftenGoodsdata() {
      let result = await oftenGoodsList()
      console.log(result);
      this.oftenGoods = result.data
    },
    async gettype0Goodsdata() {
      let result = await type0GoodsList()
      console.log(result);
      this.type0Goods = result.data[0];
      this.type1Goods = result.data[1];
      this.type2Goods = result.data[2];
      this.type3Goods = result.data[3];
    },
    //添加订单列表的方法
    addOrderList(oftenGoodsItem) {
      this.totalCount = 0; //汇总数量清0
      this.totalMoney = 0;
      let isHave = false;
      //判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        console.log(this.tableData[i].goodsId);
        if (this.tableData[i].goodsId == oftenGoodsItem.goodsId) {
          isHave = true; //存在
        }
      }
      //根据isHave的值判断订单列表中是否已经有此商品
      if (isHave) {
        //存在就进行数量添加
        let arr = this.tableData.filter(o => o.goodsId == oftenGoodsItem.goodsId);
        arr[0].count++;
        console.log(arr);
      } else {
        //不存在就推入数组
        let newGoods = { goodsId: oftenGoodsItem.goodsId, goodsName: oftenGoodsItem.goodsName, price: oftenGoodsItem.price, count: 1 };
        this.tableData.push(newGoods);
      }
      this.getAllMoney()


    },
    //删除单个商品
    delSingleGoods(oftenGoodsItem) {
      console.log(oftenGoodsItem);
      this.tableData = this.tableData.filter(o => o.goodsId != oftenGoodsItem.goodsId);
      this.getAllMoney()
    },
    //汇总数量和金额
    getAllMoney() {
      this.totalCount = 0;
      this.totalMoney = 0;
      if (this.tableData) {
        this.tableData.forEach((element) => {
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + (element.price * element.count);
        });
      }

    },
    //删除整个订单
    delAllGoods() {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    //模拟结账成功
    checkout() {
      if (this.totalCount != 0) {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
          message: '结账成功，感谢你又为店里出了一份力!',
          type: 'success'
        });

      } else {
        this.$message.error('不能空结。老板了解你急切的心情！');
      }

    }

  },
  mounted() {
    var orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeight + 'px';
    this.getoftenGoodsdata()
    this.gettype0Goodsdata()


  }
}
</script>
<style scoped>
.pos-order {
  background-color: white;
  border-right: 1px solid azure;
}

.div-button {
  margin-left: 70px;
  margin-top: 10px;
}

.title {
  height: 20px;
  border-bottom: 1px solid white;
  background-color: white;
  padding: 10px;
}

.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid white;
  padding: 10px;
  margin: 5px;
  background-color: rgba(220, 211, 211, 0.306);
}

.o-price {
  color: #58B7FF;
}

.goods-type {
  clear: both;
}

.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #E5E9F2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;

}

.cookList li span {

  display: block;
  float: left;
}

.foodImg {
  width: 40%;
}

.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;

}

.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}

.shuliang {
  margin-left: 150px;
}</style>
