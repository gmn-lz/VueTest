// function quickSort( arr ) {
//     if(arr.length <= 1) return arr;
//     const num = arr[0];
//     let left = [], right = [];
//     for(let i = 1;i < arr.length; i++) {
//         if(arr[i]<=num) left.push(arr[i]);
//         else right.push(arr[i]);
//     }
//     return quickSort(left).concat([num],quickSort(right));
// }
// let data=[1,3,4,1,3,9,3,5,7];
// let result= quickSort(data);
// console.log(result);

// function quick(arr){
//     if(arr.length<=1) return arr
//     const num=arr[0]
//     let left =[],right=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<num) left.push(arr[i])
//         else right.push(arr[i])
//     }
//     return quickSort(left).concat([num],quickSort(right))

// // }


// function quiksort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let data=arr[0]
//     let left =[]
//     let right=[]
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<=data){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return quiksort(left).concat(data,quiksort(right))
// }




function quik(arr){
    let data=arr[0]
    let left=[]
    let right=[]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<=data) left.push(arr[i])
        else right.push(arr[i])
    }
    return quik(left).concat(data,quik(right))
}


let data=[1,3,4,1,3,9,3,5,7];
let result= quiksort(data);
console.log(result);



























