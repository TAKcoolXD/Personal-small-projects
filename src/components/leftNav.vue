<template>
  <div class="leftNav">
    <ul>
      <li>
        <i  class="icon iconfont icon-xialingyingicon-17"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-shangpin"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="icon iconfont icon-renzhengyonghu"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-tongji"></i>
        <div>统计</div>
      </li>
    </ul>
   
  </div>
   
</template>

<script>
export default {
  name: 'leftNav',
}
</script>


<style scoped lang="less">
.leftNav{
    color:#fff;
    font-size:10px;
    height:100%;
    background-color: #241f23;
    float:left;
    width:5%; 
}
.leftNav ul{
    padding:0px;
    margin: 0px;
}

.leftNav ul li{
    list-style: none;
    text-align: center;
    border-bottom:1px solid #9ba0a4;
    padding:10px;
}
.iconfont{
       font-size:24px;
    }
</style>
