var express=require('express')
var app=express();
app.use('/', express.static('public'));
var server=app.listen(80, function(){
  console.log("Server is listening at port 80");
});
