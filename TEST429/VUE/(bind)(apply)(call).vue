<script>
// 手写new------------------------
// 创建一个新的空对象。
// 将这个新对象的__proto__属性链接到构造函数的prototype对象。
// 将构造函数的作用域赋给新对象（即this指向新对象）。
// 如果构造函数没有显式返回一个对象，则返回这个新对象。
function mynew(func, ...args) {
    const obj = {}
    obj.__proto__ = func.prototype
    let result = func.apply(obj, args) 
    return result instanceof Object ? result : obj
}
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 1、构造函数 显式返回（return结果）——new之后就会返回这个实例——返回的实例不是构造函数的创建的，没有构造函数的原型对象上的方法
//    如果构造函数不返回（没有return），那么new之后就会返回 构造函数创建的实例
// 2、apply立即调用函数  返回值就是func的返回值——func（也就是Person）
//                     没有返回值——会返回undefined——不是Object对象
//                     有返回值——构造函数显式返回对象——注意这里new后，不能获取构造函数原型对象的方法



// 手写call（）-----------------------
Function.prototype.mycall=function(ctx,...args){
    ctx=(ctx===undefined||ctx===null)?globalThis:Object(ctx)
    // 执行method方法——就是运行this
    const fnSymbol = Symbol('fn');  
    ctx[fnSymbol] = this;  
    const result = ctx[fnSymbol](...args);  

    delete ctx[fnSymbol];  
    return result;  

    const fn=this
    fn(...args)  //这里fn的this指向全局（没有调用者）——要让this指向ctx——ctx调用this
    ctx.fn(...args)//ctx调用this，但是ctx没有这个fn属性
    ctx["a"]=fn    
    ctx["a"](...args)//这样会出现ctx的属性冲突——要使用symbol
}
method.call(null,1,2,3)
// 1、call会将 传入的第一个参数变成包装类型（传入null和undefined时——得到的是全局对象）
//    globalThis——环境判断，在浏览器环境就是window，在node环境就是global
//    Object(1)——会得到Number{1}
//      参数归一化


// 手写apply()--------------
// 手写bind()----------------不立即执行，返回新的函数_传入的参数是 （can1，canList）
Function.prototype.mybind=function(ctx,...initargs){
    let fn=this //this指向调用bind的fn
    return function boundFn(afterargs){
        let allArgs=[...initargs,...afterargs]
        if(this instanceof boundFn){
            return new fn(...allArgs)
        }
        return fn.apply(ctx,allArgs)
    }
}
// 追加参数的调用方式
    // 直接调用
    // 使用new关键字——this指向新的对象——不用改变指针
let newFn =fn.mybind('ctx',1,2)
newFn(3,4)
const reslut=new newFn(3,4)


// 测试
console.log.call.call.call.apply((a)=>a,[1,2,3])

// console.log——本身是函数——console.log==Function.prototype.call
// Function.prototype.call本事是函数——Function.prototype.call.call还是Function.prototype.call
// console.log.call.call.call.apply((a)=>a,[1,2,3])——Function.prototype.call.apply((a)=>a,[1,2,3])
Function.prototype.call.apply((a)=>a,[1,2,3])

// 函数.apply(this指向,参数数组)————this指向.函数(参数数组)
    // ((a)=>a).call(1,[1,2],3)
    // call第一个参数——this改变指向——但是箭头函数没有this，不影响
    // (a)=>a  只接受一个参数——  会输出【1,2】
    // 如果是(...a)=>a 就会输出【1,2】,3 了 

    function ajaxText(url) {
        // 1,创建对象
        let xhr = new XMLHttpRequest();
        // 2，创建http请求
        xhr.open('GET',url,true)
        // 3，设置状态监听函数
        xhr.onreadystatechange = function(){
            if(this.readyState !== 4) return
            if(this.status === 200){
                    handle(this.response)
            }else{
                    console.error(this.statusText)
            }
        }
        // 设置请求失败时的监听函数
        xhr.onerror = function(){
            console.error(this.statusText);
        }
        // 设置请求头信息
        xhr.responseType = 'json'
        xhr.setRequestHeader('Accept','application/json')
        // 发送请求
        xhr.send()
    }  

</script>
该项⽬主要是负责开发针对超市蔬菜配送的商品管理可视化平台。实现商家登录、蔬菜上架/下架、订单查看、客⼾信息管
理、蔬菜分类设置、商品促销以及销售统计等功能。本⼈主要负责的是前端⻚⾯的搭建和路由跳转功能，以及登录、蔬菜上
架下架、客⼾订单管理、蔬菜分类筛选展⽰等功能。

该项⽬建⽴⼀个⽹络平台为社区附近的流浪猫提供免费的绝育和医疗服务。实现⽤⼾登录、猫咪档案登记、附近猫咪查询、
猫咪绝育计划申请、猫咪健康状况监视等功能。本⼈主要负责⼩程序以上功能的前端⻚⾯搭建、封装接⼝请求、组件封装、
性能优化和跨端兼容等功能。