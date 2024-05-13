function formatarr( arr ) {
    // write code here
    let result=[Number(arr[0])]
    let res=[]
    for( let i=1;i<arr.length;i++){
        if(Number(arr[i])==Number(arr[i-1])+1){
            result.push(Number(arr[i]))
            
        }else{
            res.push(result)
            result=[Number(arr[i])]
        }
    }
    res.push(result)
    console.log(res)
    let str=""
    for (b of res){
        if(b.length>1){
            str+=(b[0]+"-"+b[b.length-1])+"\|"
        }else{
            str=str+b[0]+"\|"
        }
    }
    
    console.log(str.slice(0,-1))
}
formatarr(["1","2","4","5","7","8"])