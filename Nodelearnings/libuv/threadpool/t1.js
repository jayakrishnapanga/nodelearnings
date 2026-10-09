
const crypto=require("crypto")
const salt=crypto.randomBytes(16).toString("hex")

process.env.UV_THREADPOOL_SIZE=4
crypto.pbkdf2("password",salt,5000000,50,"sha512",(err,derivedKey)=>{
    if (err) {
        console.error("Error during hashing:", err);
        return;
    }
    console.log(" 1 cyrptopbkdf2")
})
crypto.pbkdf2("password",salt,5000000,50,"sha512",(err,derivedKey)=>{
    if (err) {
        console.error("Error during hashing:", err);
        return;
    }
    console.log(" 2 cyrptopbkdf2")
})
crypto.pbkdf2("password",salt,5000000,50,"sha512",(err,derivedKey)=>{
    if (err) {
        console.error("Error during hashing:", err);
        return;
    }
    console.log(" 3 cyrptopbkdf2")
})
crypto.pbkdf2("password",salt,5000000,50,"sha512",(err,derivedKey)=>{
    if (err) {
        console.error("Error during hashing:", err);
        return;
    }
    console.log(" 4 cyrptopbkdf2")
})

crypto.pbkdf2("password",salt,5000000,50,"sha512",(err,derivedKey)=>{
    if (err) {
        console.error("Error during hashing:", err);
        return;
    }
    console.log(" 5 cyrptopbkdf2")
})