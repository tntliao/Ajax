const { response } = require('express');
let express = require('express');

let app = express();

app.get('/home', (require, response) => {
    //响应一个页面
    response.sendFile(__dirname + '/01_index.html');
})

app.get('/data', (require, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('用户数据');
})

app.listen(9000, () => {
    console.log('服务已启动...');
})
