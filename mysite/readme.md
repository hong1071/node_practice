## my site powered by node.js(express)

#### 설치 패키지
```bash
[mysite] $ npm i express
[mysite] $ npm i ejs
[mysite] $ npm i mysql2
[mysite] $ npm i express-session                        // 세션처리하는데 사용
[mysite] $ npm i sequelize
[mysite] $ npm i dotenv
[mysite] $ npm i multer
[mysite] $ npm i winston                                // 로깅하는데 사용
[mysite] $ npm i winston-daily-rotate-file              // 로깅하는데 사용
[mysite] $ npm i moment

[mysite] $ npm i -D nodemon
[mysite] $ npm i -D mocha
[mysite] $ npm i -D chai
```

#### scripts in package.json
```json
"scripts": {
    "start": "node index.js",
    "debug": "nodemon index.js",
    "test" : "npx mocha"
  }
```

#### project structure
<pre>
/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- [node-modules]
    |--- test
    |--- logging
    |--- [logs]
    |       |--- [error]
    |--- [multer-temporary-store]
    |--- config
    |--- public
    |       |--- [upload-images]
    |       |--- assets
    |               |--- css
    |               |--- image
    |               |--- js
    |--- routers
    |--- controllers
    |       |--- admin
    |--- models
    |--- views
            |--- main
            |--- user
            |--- board
            |--- guestbook
            |--- gallery
            |--- includes
            |--- admin
                    |--- includes
</pre>