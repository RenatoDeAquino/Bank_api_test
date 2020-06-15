const mongoose = require('mongoose');
const User = mongoose.model('card-info');
module.exports = {

    async alter_saldo(req, res) {
        await User.update(
            { "cards_list._id": req.params._id },
            { "$set": { "cards_list": { "saldo": req.body.saldo } } },
            
        )
        .then(function(){
            return res.sendStatus(200)
        })
        .catch(function(err){
            console.log(err);
            return res.sendStatus(400);
        })
    },

    async alter_limite(req, res) {
        await User.update(
            { "cards_list._id": req.params._id },
            { "$set": { "cards_list": { "limite": req.body.limite } } },
            
        )
        .then(function(){
            return res.sendStatus(200)
        })
        .catch(function(err){
            console.log(err);
            return res.sendStatus(400);
        })
    }
}