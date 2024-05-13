// function getUrlParam( sUrl ,  sKey ) {
//     // write code here
//     let queryP={}
//     let reg=/([^?=&]+)=([^?=&]+)/g
//     sUrl.replace(reg,function(){
//         queryP[arguments[1]]=arguments[2]
//     })
//     console.log( queryP)
// }
// getUrlParam("https://hr.nowcoder.com/console/question/add?a=1&b=2","a")

// str ="https://hr.nowcoder.com/console/question/add?a=1&b=22"
// function getUrl(URL){
//     let reg=/([^?&]+)=([^?&]+)/g
//     let res={}
//     URL.replace(reg,function(){
//         res[arguments[1]]=arguments[2]
//     })
// console.log(res)
// }
// getUrl(str)

// (function(){
//     var a = b = 20;
// })();
// console.log(typeof(a));
// console.log(b);
// Object.prototype
// 物理层，数据链路层，传输层，网络层，会话层，表示层，应用层

function arrayToTree(items, parentId = null) {
    const tree = [];
    const lookup = {};
    // {1:{{ id: 5, parentId: null, name: 'Item 2' },children:[]}
    items.forEach(item => {
        lookup[item.id] = { ...item, children: [] };
    });
    // 然后，遍历所有项，并将它们放入树中正确的位置 
    items.forEach(item => {
        const parent = lookup[parentId];
        if (parent) {
            // 找到了父项，当前项添加到父项的 children 数组中 
            parent.children.push(lookup[item.id]);
        } else {
            // 没有找到父项（即它是顶级项），将其添加到树中 
            tree.push(lookup[item.id]);
        }
    });
    return tree;
} 