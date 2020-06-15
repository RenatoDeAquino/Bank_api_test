const mongoose = require('mongoose');
const User = mongoose.model('card-info');
module.exports = {

    async sai_card(req, res) {
        await User.update(
            { "cards_list._id": req.params._id },
            { "$pull": { "cards_list": { "_id": req.params._id } } },
            
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