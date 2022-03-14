const os= require('os');
const express=require('express');
const app=express();
const sha256=require('sha256');
const cors =require('cors');
const bodyparser=require('body-parser');



var eth=os.networkInterfaces().eth0;
var Wifi = os.networkInterfaces()['Wi-Fi'][0].mac;
// console.log(os.networkInterfaces()['Wi-Fi'][0].mac);
var wlan=os.networkInterfaces().wlan0;
var j;


if(typeof Wifi != undefined){
        j=sha256(Wifi);
}

app.use(bodyparser());
app.use(cors());
app.get("*",(req,res,next)=>{
    res.send(`Your Mac address is being tracted, refrain from illicit activities.<br><h3>Your MAC hashed = ${j}</h3>`).status(200);
})

app.post("/Username",(req,res)=>{
    console.log(req.body.username);
    console.log(sha256(req.body.username +j));
    console.log("postrequest");
    res.send(j).status(200);
})

app.listen(10001,'127.0.0.1',()=>{
    console.log("server started");
});