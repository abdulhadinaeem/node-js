
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});
app.get('/about', (req, res) => {
    res.send('About Us' + 'Hey,' + req.query.name);
});
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});



//HTTP:
// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const myServer = http.createServer(app);
// const myServer = http.createServer((req,res)=>{
//     if (req.url === '/favicon.ico') return res.end();
        
    
//     const myUrl = url.parse(req.url,);
//    const log = `${Date.now()} : ${myUrl.pathname}, Request...`;
//    fs.appendFile('log.txt', log + '\n', (err) => {
//        if (err) {
//            console.error('Error writing to log file:', err);
//        }
//        res.end('Hello From Server');
//    });
//    switch (req.url) {
//        case '/':
          
//            res.end('Welcome to the Home Page');
//            break;
//        case '/about':
//         //    res.writeHead(200, {'Content-Type': 'text/html'});
//            res.end('About Us');
//            break;
//        case '/contact':
//         //    res.writeHead(200, {'Content-Type': 'text/html'});
//            res.end('Contact Us');
//            break;
//        default:
//         //    res.writeHead(404, {'Content-Type': 'text/html'});
//            res.end('404 Not Found');
//    }
   
// });
// myServer.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });