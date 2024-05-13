function fun(data){
    let count=0
    for(arr of data){
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if((arr[i]^arr[j])===(arr[i]+arr[j])){
                    count++
                }
            }
        }
        console.log(count)
    }
}
let data=[['1','2'],['4','5']]
fun(data)