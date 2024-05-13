function maxCount( str ) {
    // write code here
    let arr=new Map()
    for(s of str){
            let code=s.charCodeAt(0)
            if(65<code<122){
                let j=0
                if(code<=90){
                    j=code+32
                }else{
                    j=code-32
                }
                let min=Math.min(code,j)
                if(arr.get(min)!==undefined){
                    arr.set(min,arr.get(min)+1)
                }else{
                    arr.set(min,1)
                }
            }
    }
    // console.log(arr)
    let max=1
    for( ar of arr){
        if(ar[1]>max){
            max=ar[1]
        }
            // console.log(ar[1])
    }
    return max
    
}
module.exports = {
    maxCount : maxCount
};

console.log( maxCount("ee1111"))

// console.log('a'.charCodeAt(0))