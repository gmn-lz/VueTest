// // function quiksort(arr,left=0,right=arr.length-1){
// //     if(left<right){
// //         let index=part(arr,left,right)
// //         quiksort(arr,left,index-1)
// //         quiksort(arr,index+1,right)
// //     }
// //     return arr
// // }
// // function part(arr,left,right){
// //     let piv=arr[right]
// //     let i=left
// //     for(let j=left;j<right;j++){
// //         if(arr[j]<piv){
// //             [arr[i],arr[j]]=[arr[j],arr[i]]
// //             i++
// //         }
// //     }
// //     [arr[i],arr[right]]=[arr[right],arr[i]]
// //     return i
// // }

// // class LRUCache {
// //     data = new Map(); // 数据map
// //     constructor(length) {
// //     if (length < 1) throw new Error('长度不能小于1')
// //         this.length = length
// //     }

// //     set(key, value) {
// //         const data = this.data;
// //         // 如果存在该对象,则直接删除
// //         if (data.has(key)) {
// //             data.delete(key);
// //         }
// //         // 将数据对象添加到map中
// //         data.set(key, value);
// //         if (data.size > this.length) {
// //             // 如果map长度超过最大值,则取出map中的第一个元素,然后删除
// //             const delKey = data.keys().next().value
// //             data.delete(delKey);
// //         }
// //     }
// //     get(key) {
// //         const data = this.data;
// //         // 数据map中没有key对应的数据,则返回null
// //         if (!data.has(key)) return null;
// //         const value = data.get(key);
// //         // 返回数据前,先删除原数据,然后在添加,就可以保持在最新
// //         data.delete(key);
// //         data.set(key, value);
// //         return value;
// //     }
// // }


// // class LRUCache {  
// //     constructor(size) {  
// //       this.size = size;  
// //       this.cache = new Map();  
// //     }  
// //     get(key) {  
// //       if (!this.cache.has(key)) {  
// //         return -1; // 如果键不存在于缓存中，则返回-1或其他表示未找到的值  
// //       }  
// //       // 如果键存在，先删除旧的键值对，然后将其放到Map的末尾（表示最近使用）  
// //       const value = this.cache.get(key);  
// //       this.cache.delete(key);  
// //       this.cache.set(key, value);  
// //       return value;  
// //     }  
    
// //     put(key, value) {  
// //       if (this.cache.has(key)) {  
// //         // 如果键已经存在，先删除旧的键值对  
// //         this.cache.delete(key);  
// //       } else if (this.cache.size >= this.size) {  
// //         // 如果键不存在并且缓存已满，则移除最久未使用的项（Map的第一个元素）  
// //         this.cache.delete(this.cache.keys().next().value);  
// //       }  
// //       // 将新的键值对添加到Map的末尾（表示最近使用）  
// //       this.cache.set(key, value);  
// //     }  
// //   }  
    


// function queryURLparamsRegEs6(url) {
//     let obj = {}
//     let reg = /([^?=&]+)=([^?=&]+)/g
//     url.replace(reg, (...arg) => {
//         obj[arg[1]] = arg[2]
//     console.log(arg)

//     })
//     // console.log(obj)

// }
// const url = 'https://www.baidu.com/m?f=8&ie=utf-8&rsv_bp=1&tn=monline_3_dg&wd=session'

// queryURLparamsRegEs6(url)

// function arrayToTree(items, parentId = null) {  
//     const tree = [];  
//     const lookup = {};  
//     // {1:{{ id: 5, parentId: null, name: 'Item 2' },children:[]}
//     items.forEach(item => {  
//         lookup[item.id] = { ...item, children: [] };  
//     });  
//     // 然后，再次遍历所有项，并将它们放入树中正确的位置  
//     items.forEach(item => {  
//         const parent = lookup[parentId];  
//         if (parent) {  
//             // 如果找到了父项，则将当前项添加到父项的 children 数组中  
//             parent.children.push(lookup[item.id]);  
//         } else {  
//             // 如果没有找到父项（即它是顶级项），则将其添加到树中  
//             tree.push(lookup[item.id]);  
//         }  
//     });  
//     return tree;  
// }  

// // 示例数据  
// const items = [  
//     { id: 1, parentId: null, name: 'Item 1' },  
//     { id: 2, parentId: 1, name: 'Item 1.1' },  
//     { id: 3, parentId: 1, name: 'Item 1.2' },  
//     { id: 4, parentId: 2, name: 'Item 1.1.1' },  
//     { id: 5, parentId: null, name: 'Item 2' },  
//     // ... 其他项  
// ];  
  
// // 将数组转换为树形结构  
// const tree = arrayToTree(items);  
  
// // 输出树形结构（仅用于演示）  
// // console.log(JSON.stringify(tree, null, 2));

// let num = 10;
// let binaryStr = num.toString(2);
// console.log(binaryStr); // 输出 "1010"

let arr=[1,2,[3,2],[1,4,[1,2]]]
function flat(arr,num){
  if(num==0){
    return arr
  }
  return arr.reduce(function(pre,val){
    if(Array.isArray(pre)){
      return pre.concat(flat(val,num-1))
    }else{
      return pre.concat(val)
    }
  },[])
}
console.log(flat(arr,0))