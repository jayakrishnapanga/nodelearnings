
const fs=require("node:fs")


process.nextTick(()=>{
    console.log("this has some previlages process.nextick")
})
setImmediate(()=>{
    console.log("setimmediate funciton was executed ")
})
process.nextTick(()=>{
    console.log("this has some previlages process.nextick2")
})
setTimeout(()=>{
    console.log("the code has to executed right away")
},0)

fs.readFile("../testfile.txt","utf8",(err,data)=>{
    if(err){
        console.log("we git error while reading the file",err)
    }
    console.log("file read happen suucessfully ")
    console.log(data)
})
process.nextTick(()=>{
    console.log("this has some previlages process.nextick")
})

Promise.resolve(() => {
    console.log("hello promise function executed");
}).then(callback => {
    callback();
});
