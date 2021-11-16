const model = require('../models/emaillist');
module.exports = {
    index: async function(req, res){
        const results = await model.findAll(function(){});
        res.render('index', {
            list: results || []
        });
    },
    form: function(req, res){
        res.render('form');
    },
    add: async function(req, res){
        console.log(req.body);
        const results = await model.insert(req.body)
        res.redirect("/");
    }
}