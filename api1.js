const http=require('http');
const data=require('./data.js')
http.createServer((request,responce)=>{
  responce.writeHead(200,{'Content_Type':'./application.json'});
  responce.write(JSON.stringify(data));
  responce.end();
}).listen(3000);
