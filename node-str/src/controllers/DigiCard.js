const mongoose = require('mongoose');
const User = mongoose.model('card-info');
module.exports = {

    async add_card(req, res) {
        await User.findOneAndUpdate({person_email: req.params.person_email},  
            { $push: { DigiList: req.body.DigiList } } , { new: true})  //Atualiza o array
        .then(function(){
            return res.sendStatus(200)
        })
        .catch(function(err){
            console.log(err);
            return res.sendStatus(400);
        })
    },

    async mostra_card(req,res){ 
        await User.findOne({person_email: req.params.person_email})
        .then(function(usr){
            return res.json(usr.DigiList)
        })
        .catch(function(err){
            return res.sendStatus(400)
        })
    },
    
    async sai_card(req, res) {
        await User.update(
            { "DigiList._id": req.params._id },
            { "$pull": { "DigiList": { "_id": req.params._id } } },
            
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