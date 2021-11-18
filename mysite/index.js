const http = require('http');
const path = require('path')
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');

// 1. Environment Variables
dotenv.config({path: path.join(__dirname, 'config/app.env')})
dotenv.config({path: path.join(__dirname, 'config/db.env')})

// 2. Application Routers
const { applicationRouter } = require('./routes');
const { SIGTERM } = require('constants');

// 3. Logger
const logger = require('./logging');

// 4. Application Setup
const application = express()

    // 1) Session Environment
    .use(session({
        secret: "mysite-session",
        resave: false
    }))

    // 2) request body parser                       날아오는 데이터를 가공(encoding)
    .use(express.urlencoded({extended: true}))      // application/x-www-form-urlencoded
    .use(express.json())                            // application/json

    // 3) Multipart
    
    // 4) static resources 
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))

    // 5) view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs');

// 5. Application Router Setup
applicationRouter.setup(application);


// 6. Server Setup
http.createServer(application)
    .on('listening', function(){
        logger.info(`http server runs on ${process.env.PORT}`);
    })
    .on('error', function(error){
        switch(error.code){
            case 'EACCESS':
                logger.error(`${process.env.PORT} requires privileges`) ;
                process.exit(1);
                break;
            case 'EADDINUSE':
                logger.error(`${process.env.PORT} is already in use`) ;
                process.exit(1);
                break;
            default:
                throw error;
        }
    })
    .listen(process.env.PORT);