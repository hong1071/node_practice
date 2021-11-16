const connect = require('connect');
const serveStatic = require('serve-static');
const connectRoute = require('connect-route');

const port = 8080;
const app = connect();

app.use(serveStatic(__dirname + "/public"));
app.use(connectRoute(function(router){
    router.get("/", function(req, resp){
        resp.writeHead(200, {               //헤더
            'Content-Type': 'text/html'
        });
        resp.end('<h1>Main</h1>')    // 내용
    });

    router.get("/user", function(req, resp){
        console.log(req._parsedUrl.query);

        req.query = {};
        params = ((req._parsedUrl.query || '').split('&'));
        params.forEach(function(param){
            tokens = param.split('=');
            req.query[tokens[0]] = tokens[1];
        });
        
        resp.writeHead(200, {               //헤더
            'Content-Type': 'text/html'
        });
        resp.end(`<h1>User No: ${req.query.no}</h1>`)    // 내용
    });

    router.get("/guestbook", function(req, resp){
        resp.writeHead(200, {               //헤더
            'Content-Type': 'text/html'
        });
        resp.end('<h1>Guestbook List</h1>')    // 내용
    });

    router.get("/board", function(req, resp){
        resp.writeHead(200, {               //헤더
            'Content-Type': 'text/html'
        });
        resp.end('<h1>Board List</h1>')    // 내용
    });

    router.get("/board/:no", function(req, resp){
        resp.writeHead(200, {               //헤더
            'Content-Type': 'text/html'
        });
        resp.end(`<h1>Board View: ${req.params.no}</h1>`)    // 내용
    });
}));

app.listen(port, function(){
    console.log(`http server running on ${port}`);
});