var express=require('express')
var capillary=express()
capillary.get('/get',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Content-Type', 'application/json');
	res.json({name:"movie-1",genre:"fiction",price:"200"});
});
capillary.listen('8080',function(){
	console.log('app running')
})
