// // 1.写一个函数retryFetchData，该函数能够在fetchData被reject(e)时进行重试，最多重试n次。请用Promise实现该函数。
// function fetchData() {
//     // 这里是一个返回Promise的异步操作，例如fetch请求 可以不用写
// }

// function retryFetchData(fetchData, n) {
//     if(n==0){
//         return 
//     }
//     // 需要补充
//     let result=fetchData.then(()=>{
//         return "success"
//     },(e)=>{
//         if(e!==undefined){
//             retryFetchData(fetchData,n-1)
//         }
//     })
//     return result
// }

// const p1 = new Promise((resolve) => {

//     setTimeout(() => {
//       resolve('resolve3');
//       console.log('timer1')
//     }, 0)

//     resolve('resovle1');
//     resolve('resolve2');
//   })
//   .then(res => {

//     console.log(res)

//     setTimeout(() => {
//       console.log(p1)
//     }, 1000)

//   })
//   .finally(res => {
//     console.log('finally', res)
//   })

//   resovle1
//   finally underfined
// timer1
//   Promise 


// try {

//     setTimeout(() => {
//       throw new Error('err')
//     }, 200);

//     throw new Error('err1')
//   } catch (err) {
//     console.log(err+"1");
//   }


// 如需使用参数输入，请直接去掉下面注释
// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// console.log('Hello World!');

function fun(arr) {
  let newarr = new Array(arr.length).fill( Array(arr[0].length).fill(0))
  // let newarr1 = new Array(arr.length);
  // for (let i = 0; i < arr.length; i++) {
  //   newarr[i] = new Array(arr[0].length).fill(0);
  // }

  let dp = newarr
  dp[0][0] = arr[0][0]

  for (let i = 1; i < arr[0].length; i++) {
    dp[0][i] = dp[0][i - 1] + arr[0][i]
  }
  for (let i = 1; i < arr.length; i++) {
    dp[i][0] = dp[i - 1][0] + arr[i][0]
  }
  // console.log(dp)
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[0].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + arr[i][j]
    }
  }
  console.log(dp)
  return dp[arr.length - 1][arr[0].length - 1]
}
arr = [[1, 3, 1],
[1, 5, 1],
[4, 2, 1]
]
console.log(fun(arr))

