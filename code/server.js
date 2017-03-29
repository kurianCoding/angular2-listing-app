var express=require('express')
var capillary=express()
capillary.get('/',function(req,res){
	res.send('...')
});
capillary.listen('80',function(){
	console.log('app running')
})
