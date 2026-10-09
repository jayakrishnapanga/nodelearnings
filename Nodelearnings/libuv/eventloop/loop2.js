
const fs=require("node:fs")


setImmediate(()=>{
    console.log("setimmediate funciton was executed ")
})
setTimeout(()=>{
    console.log("the code has to executed right away")
},0)

fs.readFile("../testfile.txt","utf8",(err,data)=>{
    if(err){
        console.log("we got error while reading the data",err)
    }
    setImmediate(()=>{
        console.log("second setimmediate")
    })
    setTimeout(()=>{
        console.log("second timer")
    },0)
    Promise.resolve(() => {
        console.log("hello promise ");
    }).then(callback => {
        callback();
    });
    
    process.nextTick(()=>{
        console.log("next click2")
    })
    console.log("file read happen suucessfully ",data)
})

Promise.resolve(() => {
    console.log("hello promise function executed");
}).then(callback => {
    callback();
});


process.nextTick(()=>{
    console.log("this has some previlages process.nextick")
})
console.log("last line of the file")











// "last line of the file"
// "this has some previlages process.nextick"
// hello promise function executed"
// the code has to executed right away
// setimmediate funciton was executed
// "file read happen suucessfully "+data
// next click2
// hello promise 
// second timer
// second setimmediate