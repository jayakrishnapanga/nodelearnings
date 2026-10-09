const https=require("https")
const fs=require("fs")

setTimeout(()=>{
    console.log("execute this function right away")
},0)
console.log("hello world")
let name ="krishna"
console.log(name)

https.get('https://dummyapi.online/api/movies',(res)=>{
    console.log("api call made succesfully fteched")
})

//asynchronous way of executing reading the file 

fs.readFile("./testfile.txt","utf8",(err, data)=>{
    if(err){
        console.log("we got error",err)
    }
    console.log("file fetched succesfully")
    console.log(data)
})

// this is synchronous way of executing reading the file 
let data=fs.readFileSync("./testfile.txt","utf8")
console.log("file fetched succesfully")
console.log(data)


function multiply(a,b){
    return a*b
}

let ans=multiply(2,3)
console.log("mutliply function is executed ",ans)