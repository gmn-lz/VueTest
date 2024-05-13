// // // function deepclone(obj){
// // //     let clone=Array.from(obj)?[]:{}
// // //     for(let key in obj){
// // //         if(obj.hasOwnProperty(key)){
// // //             clone[key]=deepclone(obj[key])
// // //         }
// // //     }

// // // }

// // // let newobj=JSON.parse(JSON.stringify(obj))

// // // let newobj1=_cloneDeep(obj)
// // // const obj={
// // //     name:{
// // //         hoby:
// // //         age:
// // //     }
// // // }

// // // obj.forEach(element => {
// // //     if(element.get(hobby)=="xx"&&element.get(age)>25){
// // //         return element
// // //     }
// // // });
// // // // obj.get("name1").get("hobby")forEach(element => {
// // // //     if(element.value()>25)
// // // // });


// // console.log('start');

// // const promise1 = Promise.resolve(1).then((data) => {
// //   console.log( data)
// //   // console.log('promise1');
// //   const timer2 = setTimeout(() => {
// //     console.log('timer2')
// //   }, 0)
// // });

// // const timer1 = setTimeout(() => {
// //   console.log('timer1')
// //   const promise2 = Promise.resolve().then(() => {
// //     console.log('promise2')
// //   })
// // }, 0)

// // console.log('end');


// // // start
// // // end
// // // promise1
// // // timer1
// // // promise2
// // // timer2

// // // function fun1(){
// // //   console.log("1111")
// // // }
// // // // setInterval(fun1,1000)

// // // setInterval(fun1(),1000)

// // new Promise((re,rj)=>{
// //   re();
// // }).then(()=>{
  
// //   // return new Promise((reso,rejec)=>{
// //   //   rejec();
// //   // })     
// //   Promise.resolve(new Promise(){}) 
// //   Promise.reject()
// // }).then(()=>{
// // console.log(2)
// // },()=>{
// //   console.log(1)
// // })

// // const num=23451234567
// // // const num=234，5123,4567
// // // 贰佰三十四亿，五千一百二十三万，四千五百六十七元
// // let m={
// //   1:"壹",
// //   2:"贰",
// //   3:"叁",
// //   4:"肆",
// //   5:"伍",
// //   6:"陆",
// //   7:"柒",
// //   8:"捌",
// //   9:"玖",
// // }
// // let danwei={
// //   4:"千",
// //   3:"百",
// //   2:"十",
// //   1:{
// //     1:"元",
// //     2:"万",
// //     3:"亿"
// //   }
// // }
// // function money(num){
// //     // 划分数组
// //     let arr=[]
// //     let arrtemp=[]
// //     for(let i=num.length-1,j=0;i>=0;i--){
// //       if(j<4){
// //         arrtemp.push(num[i])
// //         j++
// //       }else{
// //         arr.push(arrtemp.reverse)
// //         j=0
// //         arrtemp=[]
// //       }
// //     }
// //     // k是单位万亿元
// //     for(let i=arr.length-1,k=1;i<=0;i--){
// //       let str=""
// //       let k=arr[i].length
// //       for(let j=0;j<arr[i].length;j++){
// //         str.push(m[arr[i][j]])
// //         str.push(danwei[k])
// //       }
// //       str.push()
// //     }
// // }


// // async function async1() {
// //   console.log('async1 start')
// //   await async2()
// //   console.log('async1 end')
// //   setTimeout(() => {
// //     console.log('timer1')
// //   }, 0)
// // }
// // async function async2() {
// //   setTimeout(() => {
// //     console.log('timer2')
// //   }, 0)
// //   console.log('async2')
// // }
// // async1()
// // setTimeout(() => {
// //   console.log('timer3')
// // }, 0)
// // console.log('start')

// // async1 start
// // async2
// // start
// // async1 end
// // timer3
// // timer2
// // timer1
// // async1 start => async2 => /*  */start => async1 end => timer2 => timer3 => timer1



// function quickSort(arr, left = 0, right = arr.length - 1) {  
//     if (left < right) {  
//         let pivotIndex = partition(arr, left, right);  
//         quickSort(arr, left, pivotIndex - 1);  
//         quickSort(arr, pivotIndex + 1, right);  
//     }  
//     return arr;  
// }  
  
// function partition(arr, left, right) {  
//     let pivot = arr[right];  
//     let i = left;  
//     for (let j = left; j < right; j++) {  
//         if (arr[j] < pivot) {  
//             [arr[i], arr[j]] = [arr[j], arr[i]];  
//             i++;  
//         }  
//     }  
//     [arr[i], arr[right]] = [arr[right], arr[i]];  
//     return i;  
// }  
  
// // 使用例子  
// let arr = [3, 6, 8, 10, 1, 2, 1];  
// console.log(quickSort(arr));  // 输出: [1, 1, 2, 3, 6, 8, 10]

function calculatingScore( text ) {

    let arr="coder"
    let newt=text.split(" ")
    let num=0
    
    for(let i=0;i<newt.length;i++){
        for(let j=0;j<newt[i].length;j++){
            // return newt[i][j].charCodeAt(0)
            if(newt[i][j]==arr[j]||Math.abs(newt[i][j].charCodeAt(0)-arr[j].charCodeAt(0))==32){
                if(j==arr.length-1){
                    num++
                }
                continue
            }else{
                break
            }
        }
        
        
    }
    console.log( num)

    
}
calculatingScore("coder  coder")