const fs=require("node:fs")

setImmediate(()=>{
    console.log("setimmedidate")
})
setTimeout(()=>{
    console.log("timer expired")
},0)

fs.readFile("../testfile.txt","utf8",(err,data)=>{
    if(err){
        console.log("we git error while reading the file",err)
    }
    console.log("file read happen suucessfully ")
    console.log(data)
})

process.nextTick(()=>{
    process.nextTick(()=>{
        console.log("innernexttick")
    })
    console.log("nexttick")
})
Promise.resolve("prmoise").then(console.log)

console.log("last line of the file ")

// console.log("nexttick")
// console.log("innernexttick")
// promsie
// console.log("timer expired")
// console.log("setimmedidate")
// file output