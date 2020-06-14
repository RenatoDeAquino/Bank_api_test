const mongoose = require('mongoose')
const Infos = mongoose.model('card-info')

exports.getFat = (card_number) => {
    return Infos
        .findOne({
            card_number: card_number
        }, 'card_fat')
}

exports.getLim = (card_number) => {
    return Infos
        .findOne({
            card_number: card_number
        }, 'card_limit ')
}

exports.getSal = (card_number) => {
    return Infos
        .findOne({
            card_number: card_number
        }, 'card_saldo ')
}

exports.getNumCard = (person_cpf) => {
    return Infos
        .findOne({
            person_cpf: person_cpf
        }, 'card_number')
}

exports.getNumCard = (person_cpf) => {
    return Infos
        .findOne({
            person_cpf: person_cpf
        }, 'person_name')
}




exports.alteraSaldo = (card_number, data) => {
    return Infos.findOneAndUpdate(card_number,{
        $set: {
            card_saldo: data.card_saldo
        }
    })
}

exports.alteraLimite = (card_number, data) => {
    return Infos.findOneAndUpdate(card_number,{
        $set: {
            card_limit: data.card_limit
        }
    })
}
    
/*exports.alteraFat = (card_number, data) => {
    return Infos.findOneAndUpdate(
        card_number,{$push: {card_fatura: data.card_fatura}},
        {new: true}
    )
}
*/

    