const express = require ("express");
const bodyParser = require ("body-parser")
const app =express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', function (req,res){
res.sendFile("index.html",{root:__dirname});
})
app.post('/add',function (req,res){
var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var add = num1+num2;
res.send("Addition -"+add);
});

app.post('/sub',function (req,res){
var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var sub = num1-num2;
res.send("Addition -"+sub);
});

app.post('/mul',function (req,res){
var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var mul = num1*num2;
res.send("Addition -"+mul);
});

app.post('/remainder',function (req,res){
var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var remainder = num1 % num2;
res.send("Addition -"+remainder);
});


app.listen(8000,function(){
console.log('server on port 8000')
})