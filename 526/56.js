// let arr=[1,2,[1,[1,2],3]]
// let arr1=[1,2,1,[1,2],3]


function flattenArray(arr, depth) {
    if (depth === 0) {
        return arr;
    }
    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            return acc.concat(flattenArray(val, depth - 1));
        } else {
            return acc.concat(val);
        }
    }, []);
}

const nestedArray = [1, 2, [1, [1, 2], 3]];
const depth = 0;
const flattenedArray = flattenArray(nestedArray, depth);
console.log(flattenedArray);






// function fn(arr){
//     let str=arr.toString()
//     // str.replace('[','')
//     // console.log(str)
//     // Object.toString
  
//     let result=[]
//     for(let re of str){
//         if( re !==","){
//             result.push(Number(re))
//         }
//     }
//     console.log(result)
// }

// fn(arr)