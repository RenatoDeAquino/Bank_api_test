const mongoose = require('mongoose');
const User = mongoose.model('card-info');
module.exports = {

    async atualiza_fatura(req, res) {
        await User.findOneAndUpdate({person_email: req.params.person_email},  
            { $push: { card_fat: req.body.card_fat } } , { new: true})  //Atualiza o array
        .then(function(){
            return res.sendStatus(200)
        })
        .catch(function(err){
            console.log(err);
            return res.sendStatus(400);
        })
    },
    async mostra_fatura(req,res){ 
        await User.findOne({person_email: req.params.person_email})
        .then(function(usr){
            return res.json(usr.card_fat)
        })
        .catch(function(err){
            return res.sendStatus(400)
        })
    }


}