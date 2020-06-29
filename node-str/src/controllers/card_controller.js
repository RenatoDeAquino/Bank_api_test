const mongoose = require('mongoose')
const Infos = mongoose.model('card-info')
const repository = require('../repositories/info_repository')

exports.post = (req, res, next) => {
    var info = new Infos()
    info.person_email = req.body.person_email
    info.card_number = req.body.card_number
    info.active = req.body.active
    info.card_fat = req.body.card_fat
    info.card_fatCre = req.body.card_fatCre
    info.fatura = req.body.fatura
    info.new_card = req.body.new_card
    info.cards_list = req.body.cards_list
    info.DigiList = req.body.DigiList
    info.DigiCard = req.body.DigiCard
    
    info.save().then(x=>{
        res.status(201).send({message: 'pessoa cadastrada com sucesso'})
    }).catch(e =>{
        res.status(400).send({
            message:"falaha ao cadastrar o produto",
            data:e
        })
    })
    
}
