<template>
  <div id="app">
    <leftNav></leftNav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import {tableDataList} from './api/index'
import leftNav from '@/components/leftNav.vue'
export default{
  name:'App',
  components:{
    leftNav
  },
  // methods:{
  //   async gettableDatadata(){
  //     let result= await tableDataList()
  //     console.log(result);
  //   }
  // },
  // mounted(){
  //   this.gettableDatadata()
  // }
}
</script>

<style lang="less" scoped>
.main{
  float:left;
  width:95%; 
  background-color: white;
  height:100%;
  overflow: auto;
}

</style>
