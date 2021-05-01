const http = require('http')
const url = require("url")

http.createServer(function(req,res){
    const parseURL = url.parseURL(req.url);
}).listen(3000)