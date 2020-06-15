const mongoose = require('mongoose');
const User = mongoose.model('card-info');
module.exports = {

    async add_card(req, res) {
        await User.findOneAndUpdate({person_email: req.params.person_email},  
            { $push: { cards_list: req.body.cards_list } } , { new: true})  //Atualiza o array
        .then(function(){
            return res.sendStatus(200)
        })
        .catch(function(err){
            console.log(err);
            return res.sendStatus(400);
        })
    }
}