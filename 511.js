// // 1. 实现如下 sleep(timeout) 函数，效果为等待 timeout 时间后打印出 1
// function sleep1(timeout) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, timeout)
//   })
// }
// const foo = async () => {
//   await sleep1(1000);
//   console.log(1);
// }
// foo()




// // 2. 买卖股票的最佳时机
// // 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// // 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// // 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// // 示例 1：
// // 输入：[7,1,5,3,6,4]
// // 输出：5
// // 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
// //      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

// // 示例 2：
// // 输入：prices = [7,6,4,3,1]
// // 输出：0
// // 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
// function maxvalue(arr){
//     let max=0
//     let value=0
//     let maxj=0
//     for(let i=0;i<arr.length;i++){
//       let current=arr[i]
//       for(let j=i;j<arr.length;j++){
//         if(arr[j]>maxj){
//           maxj=arr[j]
//         }
//         value=maxj-current
//         if(value>max){
//           max=value
//         }
//       }
//       maxj=0
//     }
//     return max

//   }
//   prices =[7,1,5,3,6,4]
//   maxvalue(prices)



//   // 3. 编写函数`convert(money)` ，传入金额，将金额转换为千分位表示法。例如：12345.6 => 12,345.6
// function money(data) {
//   let da = data.split('.')
//   let num = da[0].length % 3
//   let str=""
//   for(let i=0;i<num;i++){
//     str+=da[0][i]
//   }
//   str+=','
//   // 直接遍历输出
//   for(let j=num;j<da[0].length;j++){
//     for(let k=0;k<3;k++){
//       str+=da[0][j+k]
//     }
//     str+=','
//     j+=3
//   }
//   str=str.slice(0,-1)
//   str+='.'+da[1]
//   console.log(str)

// }
// money("12345.6")

// function older(data){
//   // let da=data.toString(2)
//   // console.log(da)
//   // if(da[da.length-1]==1){
//   //   return false
//   // }
//   let result =data&1
//   console.log(result)
//   // return true
// }
// console.log(older(4))


// let num=16
// console.log(num.toString(2))



















