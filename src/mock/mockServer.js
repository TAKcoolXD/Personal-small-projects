import Mock from 'mockjs'
import oftenGoods from './oftenGoods.json'
import type0Goods from './type0Goods.json'

Mock.mock('/mock/oftenGoods',{code:200,data:oftenGoods})
Mock.mock('/mock/type0Goods',{code:200,data:type0Goods})