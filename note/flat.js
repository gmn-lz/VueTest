function flat(arr,num){
    if(num==0){
        return arr
    }
    let result=arr.reduce(function(pre,val){
        if(Array.isArray(val)){
            return pre.concat(flat(val,num-1))
        }else{
           return  pre.concat(val)
        }
    },[])
    return result
}
let arr=[1,2,[1,2,3,[1,2]],3,4,[1,3,5]]
console.log(flat(arr,1))