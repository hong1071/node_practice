module.exports = {
    joinsuccess: function(req, res){
        res.render('user/joinsuccess');
    },
    join: function(req, res){
        //res.local.applicationName = '...';          // view의 ejs에서 applicationName을 사용하는 방법!!!! 중요함!!
        res.render('user/join');
    },
    _join: function(req, res){
        console.log(req.body);
        res.redirect('/user/joinsuccess');
    }
}
