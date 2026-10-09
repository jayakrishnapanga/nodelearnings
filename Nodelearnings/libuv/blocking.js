// const crypto=require("node:crypto") ila kuda rayyaocchu this respresents the core module of node anii meaning
const crypto=require("crypto")
const salt=crypto.randomBytes(16).toString("hex")
let key=crypto.pbkdf2Sync("password",salt,5000000,50,"sha512")
console.log("keysync",key)
console.log("neelmani")
crypto.pbkdf2("password",salt,50000,50,"sha512",(err,derivedKey)=>{
    if (err) {
        console.error("Error during hashing:", err);
        return;
    }
    console.log("The derived key is received:");
    console.log(derivedKey.toString("hex"));

})
console.log("jk")