const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');

    // 4) request router                        모든 라우터를 다 받아서 선 처리 한다. 주로 인증을 함
    .all('*', function(req, res, next){
        res.locals.req = req;
        res.locals.res = res;
        next();
    });

//.use('/', mainRouter)
//.use('/', userRouter);