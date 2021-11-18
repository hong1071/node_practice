const logger = require('../logging');

module.exports = {
    error404: function(req, res){
        if(req.accepts('html')){
            res.status(404).render('error/404');
        }
        res.status(404).send({
            result: 'fail',
            data: null,
            message: 'unknown request'
        })
    },
    error500: function(error, req, res, next){
        logger.error(error.stack);

        if(req.accepts('html')){
            res.status(500).send(`<pre>${error.stack}</pre>`);
            return;
        }
        res.status(500).send({
            result: 'fail',
            data: null,
            message: error.stack
        })
    }
}