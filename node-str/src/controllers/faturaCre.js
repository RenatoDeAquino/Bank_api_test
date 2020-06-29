const mongoose = require('mongoose');
const User = mongoose.model('card-info');
module.exports = {

    async atualiza_fatura(req, res) {
        await User.findOneAndUpdate({person_email: req.params.person_email},  
            { $push: { card_fatCre: req.body.card_fatCre } } , { new: true})  //Atualiza o array
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
            return res.json(usr.card_fatCre)
        })
        .catch(function(err){
            return res.sendStatus(400)
        })
    }


}