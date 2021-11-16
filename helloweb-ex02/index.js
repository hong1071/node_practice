const http = require('http');
const path = require('path')
const express = require('express');

const mainRouter = require('./routes/main');
const helloRouter = require('./routes/hello');
const userRouter = require('./routes/user');
const port = 8080;

// Application Setup
const application = express()
    
    // 1. static resources 
    .use(express.static(path.join(__dirname, 'public')))
    
    // 2. request body parser                   날아오는 데이터를 가공(encoding)
    .use(express.urlencoded({extends: true}))   // application/x-www-form-urlencoded
    .use(express.json)                          // application/json

    // 3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')

    // 4. request router                        모든 라우터를 다 받아서 선 처리 한다. 주로 인증을 함
    .all('*', function(req, res, next){
        req.locals.req = req;
        res.locals.res = res;
        next();
    })
    .use('/', mainRouter)
    .use('/hello', helloRouter)
    .use('/user', userRouter);


// Server Setup
http.createServer(application)
    .on('listening', function(){
        console.info(`http server runs on ${port}`);
    })
    .on('error', function(error){
        switch(error.code){
            case 'EACCESS':
                console.error(`${port} requires privileges`) ;
                process.exit(1);
                break;
            case 'EADDINUSE':
                console.error(`${port} is already in use`) ;
                process.exit(1);
                break;
            default:
                throw error;
        }
    })
    .listen(port);