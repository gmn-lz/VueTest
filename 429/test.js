// 给定的两个日期字符串
let dateString1 = "2023/01/01";
let dateString2 = "2023/01/31";
const str=dateString1.replace(/[0-9]/g,'')
console.log(str)

// // 解析日期字符串为 Date 对象
// let date1 = new Date(dateString1);
// let date2 = new Date(dateString2);

// // 计算日期差（毫秒），并转换为天数
// let timeDifference = Math.abs(date2.getTime() - date1.getTime());

// // 时间差（毫秒）转换为天数
// let dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

// console.log(dayDifference + " 天"); // 输出两个日期之间的天数

// function getWeekday(timestamp) {
//   const date = new Date(timestamp);
//   const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
//   console.log( date.getDay());
// }

// const timestamp = Date.now();
// getWeekday(timestamp);
