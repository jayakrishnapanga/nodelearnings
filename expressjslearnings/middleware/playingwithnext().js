const express=require("express")
const app=express()

app.use(express.json())

// case1
//you can pass anynumber of rh(routehandler functions to this )
// app.get('/user',(req,res,next)=>{
//     console.log("rh1")
//     next()

// },(req,res,next)=>{
//     console.log("rh2")
//     next()

// },(req,res,next)=>{
//     console.log("rh2")
//     next()

// },(req,res,next)=>{
//     console.log("rh4")
//     next()

// },(req,res,next)=>{
//     console.log("rh5")
//     res.send("i am exectingroutehandler5")

// })

// case2
// you can pass array of routehandlers [rh1,rh2,rh3,rh4,rh5 ...] I mean you define five functions add them into array you can pass these array also for this  
// now this i passed like this [rh1,rh2,rh3],rh4,rh5
// app.get('/user',[(req,res,next)=>{
//     console.log("rh1")
//     next()

// },(req,res,next)=>{
//     console.log("rh2")
//     next()

// },(req,res,next)=>{
//     console.log("rh2")
//     next()

// },(req,res,next)=>{
//     console.log("rh4")
//     next()

// }],(req,res,next)=>{
//     console.log("rh5")
//     res.send("i am exectingroutehandler5")

// })

case3
app.get('/user',(req,res,next)=>{
    console.log("rh1")
    next()
    res.send("hey want to handle my routeby routehandler 1 only ")

},(req,res,next)=>{
    console.log("rh2")
    res.send("hello iam rh2")
})
// it will send response from the rh2 because you are calling next() before sending response from the rh1 so it will execute rh2 then it will send response the second rotue handler after that it comebcaks from where it was called and again you are sending the response that is the reason you are getting this error
// Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
//     at ServerResponse.setHeader (node:_http_outgoing:703:11)
//     at ServerResponse.header (/Users/pangajayakrishna/NamsateNodejs/libuvlearnings/node_modules/express/lib/response.js:794:10)
//     at ServerResponse.send (/Users/pangajayakrishna/NamsateNodejs/libuvlearnings/node_modules/express/lib/response.js:174:12)
//     at /Users/pangajayakrishna/NamsateNodejs/libuvlearnings/playingwithnext().js:58:9
//     at Layer.handle [as handle_request] (/Users/pangajayakrishna/NamsateNodejs/libuvlearnings/node_modules/express/lib/router/layer.js:95:5)
//     at next (/Users/pangajayakrishna/NamsateNodejs/libuvlearnings/node_modules/express/lib/router/route.js:149:13)
//     at Route.dispatch (/Users/pangajayakrishna/NamsateNodejs/libuvlearnings/node_modules/express/lib/router/route.js:119:3)
//     at Layer.handle [as handle_request] (/Users/pangajayakrishna/NamsateNodejs/libuvlearnings/node_modules/express/lib/router/layer.js:95:5)
//     at /Users/pangajayakrishna/NamsateNodejs/libuvlearnings/node_modules/express/lib/router/index.js:284:15
//     at Function.process_params (/Users/pangajayakrishna/NamsateNodejs/libuvlearnings/node_modules/express/lib/router/index.js:346:12)

// case4
// in this case it will until the response comes i think it is hanged
// app.get("/user",(req,res)=>{
//      console.log("user route executing but i don't send the resposne")
// })
app.use("/user",(req,res,next)=>{
     console.log("hello man")
})
app.listen("3000",()=>{
    console.log("i am listening on the port 3000 from playingwithnext()")
})