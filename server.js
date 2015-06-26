var express=require('express')
var app=express();
app.use('/reading-lists', express.static('reading-lists'));
app.get('/', function (req,res){
  res.send('Future site of azure4fun');
});
var server=app.listen(80, function(){
  console.log("Server is listening at port 80");
});
