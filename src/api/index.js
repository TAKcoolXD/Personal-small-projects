import mockRequests from './mockAjax'

//oftenGoods 接口
export const oftenGoodsList=()=>mockRequests({
    url:'/oftenGoods',
    method:'get'
})


//type0Goods 接口
export const type0GoodsList=()=>mockRequests({
    url:'/type0Goods',
    method:'get'
})

//tableData 接口
// export const tableDataList=()=>mockRequests({
//     url:'/tableData',
//     method:'get'
// })
