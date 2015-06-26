var express=require('express')
var app=express();
app.use('/reading-lists', express.static('public/reading-lists'));
app.get('/', function (req,res){
  res.send('<h1>Future site of azure4fun is here</h1>');
});
var server=app.listen(80, function(){
  console.log("Server is listening at port 80");
});
