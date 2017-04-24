var express=require('express')
var capillary=express()
capillary.get('/get',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Content-Type', 'application/json');
	res.send(JSON.stringify([
	    {name:"cmovie",genere:"fiction",price:"200"},
	    {name:"bmovie",genere:"satire",price:"2000"},
	    {name:"amovie",genere:"comedy",price:"20"}
	]));
});
capillary.listen('8080',function(){
	console.log('app running')
})
