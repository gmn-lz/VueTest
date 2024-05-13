// 手写防抖节流
// 防抖——只执行连续事件的最后一次——只执行2s后的一次
// 节流——一段时间只执行一次

// ——————————————————————————————————
手写防抖(谁调用防抖)
document.getElementById('someButton').addEventListener('click', debounced);
防抖函数的参数(要被封装成防抖的方法,防抖的时间延迟,是否立即执行)

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(this, args)
        }, wait);
    }
}


function throttled2(fn, delay = 500) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, delay);
        }
    }
}

