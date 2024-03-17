var express=require("express");
var app=express();
port=3100;
const path=require('path');

app.use(express.static(path.join(__dirname)));

//Load index.html
app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:'public_html'});
})

//show text using get method after pressing link
app.get('/change',(req,res)=>{
    res.send(`<h1>you press the button</h1>`)
})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})