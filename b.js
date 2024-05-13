// // import { a, modify } from "./a.js"
// // console.log(a)
// // modify()
// // console.log(a)


// // import BigNumber from 'bignumber.js';  
// // let num = new BigNumber(0.100001111111111111).plus(0.222);
// // let fixedNum = num.toFixed(2); // '0.30'
// // console.log(num)


// // function sleep(){
// //     return new Promise(()=>{
// //         resolve()
// //     })
// // }

// function greet(greeting,name,age) {
//     console.log(greeting + ', ' + name+','+age);
// };

// // 使用bind()方法创建新函数，并预设参数
// var sayHello = greet.bind(null, 'Hello');

// // 调用新函数，并传递剩余参数
// let fn=sayHello('John'); // 输出： "Hello, John"
// fn("1")
// sayHello('John1'); // 输出： "Hello, John"


// // var person = {
// //     name: 'Alice'
// // };
// // var sayHi = greet.bind(person, 'Hi');
// // sayHi('alice'); // 输出： "Hi, Alice"

function fun(){
    let a=1;
    let afun=()=>{
        console.log("---");
        console.log (this.a);
        
    }
}
let person={
    a:2,
    name:"jack"
}
fun.call(person).afun
var a=3
// fun()

// import 内敛 id 类 标签 属性 *
文字系列属性
文本系列

// await sleep(1000)
// function sleep(time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             console.log(1)
//             resolve()
//         },time)
//     })
// }