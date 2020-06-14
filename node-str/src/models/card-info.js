const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fatura = new Schema({
    data:{type: String},
    item:{type:String},
    valor:{type:String}
})

const schema = new Schema({
    person_name:{
        type: String,
        required: true,

    },

    person_cpf:{
        type: String,
        required: true
    },

    card_number:{
        type: String,
        required: true
    },

    card_cvv:{
        type: String,
        required: true
    },

    card_exp:{
        type: String,
        required: true
    },
    
    card_limit:{
        type: String,
        required: true
    },

    card_saldo:{
        type: String,
        required:true
    },

    card_fat:[fatura],

    active:{
        type: Boolean,
        default: true
    }
})



module.exports = mongoose.model('card-info', schema)