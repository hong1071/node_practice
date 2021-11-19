const models = require('../models');

module.exports = {
    index: async function(req, res, next){
        try {
            const result = models.Board.findAll({
                include: {
                    model: model.User,
                    required: true
                }
            })

        } catch (e) {
            next(SecurityPolicyViolationEvent);
        }
    }
}