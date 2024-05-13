// function fn(s){
//     let ns=s.replace(/\(\)/g,1)
//     let arr=[]
//     let len=0
//     for(let i=0 ;i<ns.length;i++){
//         len=0
//         if(ns[i]=="1"){
//             len++
//             if(i==ns.length-1){
//                 arr.push(len)
//             }
//             for(let j=i+1;j<ns.length;j++){
//                 if(ns[j]=="1"){
//                     len++
//                     if(j==ns.length-1){
//                         i=j
//                         arr.push(len)
//                     }
//                 }else{
//                     i=j
//                     arr.push(len)
//                     break
//                 }
//             }
//         }
//     }
//     console.log(Math.max(...arr))

// }

// let str = "()(())"
// fn(str);



//Promise.all方法可以把多个promise实例 包装成一个新的promise实例
//Promise.all([ promise1, promise2]) :Promise   接收一个数组,数组中的每一项都是promise实例,最终返回的也是一个promise实例

//它分三种情况,第一种是数组中的所有promise都决议为成功的话,Promise.all就会决议为成功;
//第二种是数组中任意一个promise实例决议为失败的时候,Promise.all就会立即决议为失败
//第三种是Promise.all()中是一个空数组的时候,Promise.all就会立即决议为成功

//模拟需要多个请求的数据,才能进行下一步操作的情况


// function getData1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('第一条数据加载成功');
//             resolve('data1');
//         }, 1000)
//     })
// }

// function getData2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('第二条数据加载成功');
//             resolve('data2');
//         }, 1000)
//     })
// }

// function getData3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('第三条数据加载成功');
//             resolve('data3');
//         }, 1000)
//     })
// }

// function getData4() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('第四条数据加载成功');
//             resolve('data4')
//         }, 200)
//     })
// }

// let p = Promise.all([getData1(), getData2(), getData3(), getData4()])
// console.log(p)
// p.then(arr => {
//     console.log(arr)  // ['data1', 'data2', 'data3', 'data4']
// }, e => {
//     console.log(e)
// })


function getData1(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            console.log('第一条数据加载成功');
            resolve('data1');
        },1000)
    })
}

function getData2(){
    return new Promise( (resolve,reject) =>{
        setTimeout( () => {
            console.log('第二条数据加载成功');
            resolve('data2');
        },1000)
    })
}

function getData3(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            console.log('第三条数据加载成功');
            resolve('data3');
        },1000)
    })
}

function getData4(){
    // console.log(111)
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            console.log('第四条数据加载成功');
            reject('data4 err')
        },500)
    })
}


let p = Promise.all( [getData1(), getData2(), getData3(), getData4() ])
// console.log(p)
p.then(arr => {
    console.log(arr)  
}, e => {
    // console.log(p)
    console.log(e)  //data4 err
})