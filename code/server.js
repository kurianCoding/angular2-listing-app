var express=require('express')
var capillary=express()
capillary.get('/get',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Content-Type', 'application/json');
	res.send(JSON.stringify([{name:"movie-1",genere:"fiction",price:"200"},{name:"movie-1",genere:"fiction",price:"200"},{name:"movie-1",genere:"fiction",price:"200"}]));
});
capillary.listen('8080',function(){
	console.log('app running')
})
