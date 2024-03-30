const express = require('express');
const app=express();

app.get('',(req, resp)=>{
    resp.send("hello world")
})
app.get('/about',(req, resp)=>{
    resp.send("contact = +91 xxxxx xxxxx")
})
app.get('/laugh',(req, resp)=>{
    resp.send("hehehe hahahaha")
})

app.listen(3000);