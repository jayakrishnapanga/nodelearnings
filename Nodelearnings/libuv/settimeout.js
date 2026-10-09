
setTimeout(()=>{
    console.log("execute this function right away")
},0)

setTimeout(()=>{
    console.log("executed at 3secs")
},3000)

function multiply(a,b){
    return a*b
}

let ans=multiply(2,3)
console.log(" mutliply function is executed ",ans)