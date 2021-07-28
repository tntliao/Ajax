//1.引入express
const { response } = require('express');
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX');
})

//可以接受任何类型的请求
app.all('/server', (request, response) => {
    //设置响应 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send('HELLO AJAX POST');
})

//JSON响应
app.all('/json-server', (request, response) => {
    //设置响应 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    let data = {
        name: 'atguigu'
    }
    //对 对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
})

//IE缓存问题
app.all('/ie', (request, response) => {
    //设置响应 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应体
    response.send('HELLO IE3');
})

//延时响应
app.all('/delay', (request, response) => {
    //设置响应 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应体
    setTimeout(() => {
        response.send('延时响应');
    }, 1000)
})

//jQuery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应体
    // response.send('Hello jQuery AJAX');
    let data = { name: 'jiajia' };
    setTimeout(function () {
        response.send(JSON.stringify(data));
    }, 3000)
})

//axios-server 服务
app.all('/axios-server', (request, response) => {
    //设置响应 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应体
    response.send('Hello jQuery AJAX');
    // let data = { name: 'jiajia' };
    // setTimeout(function () {
    //     response.send(JSON.stringify(data));
    // }, 3000)
})

//axios-server 服务
app.all('/fetch-server', (request, response) => {
    //设置响应 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应体
    // response.send('Hello jQuery AJAX');
    let data = { name: 'jiajia' };
    response.send(JSON.stringify(data));
})

//jsonp服务
app.all('/jsonp-server', (require, response) => {
    // response.send('nihao'); //需要返回js语句
    let data = {
        name: 'jiajia'
    }
    //将数据转换成字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`)
})

//检测用户是否存在
app.all('/check-username', (require, response) => {
    let data = {
        exist: 1,
        msg: '用户名已存在'
    }
    let str = JSON.stringify(data);
    response.send(`handle(${str})`);
})

//
app.all('/jquery-jsonp-server', (require, response) => {
    let data = {
        name: '尚硅谷',
        city: ['北京', '上海', '深圳']
    };

    //将数据转化字符串
    let str = JSON.stringify(data);
    //接受 callback 参数
    let cb = require.query.callback;
    //返回结果
    response.end(`${cb}(${str})`);
})

app.all('/cors-server', (require, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Method', '*');

    response.send('hello CORS');
})

































// //4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已启动，8000 端口监听中...');
})