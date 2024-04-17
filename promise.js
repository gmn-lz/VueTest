// // <!-- 手写promise -->

// Promise捕获不到异步状态的错误,异步状态catch,不会改变promise的状态
// promise执行了resolved还会执行rejectd吗

// Promise.then(回调1,回调2)
// // 如果then传入的参数不是回调函数——promise穿透

// primise状态改变
// promise的状态pending,fulfilled,rejected
// pending变成其他的后,不能再返回原状态

const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {  
        resolve('Success!'); 
        console.log("newnew")
        reject("1") 
    }, 3000);  
}); 
promise.then((res)=>console.log(res),()=>console.log(2))

promise.then 是异步的——微任务
那么resolve这个是不是一步的？？？