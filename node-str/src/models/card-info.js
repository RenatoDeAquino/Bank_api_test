const mongoose = require('mongoose')
const Schema = mongoose.Schema


const DigiCard = new Schema({
    valor:{type:String}
})
const fatura = new Schema({
    name_bank:{type:String},
    data:{type:Date, default: Date.now},
    item:{type:String},
    valor:{type:String}
})

const faturaCre = new Schema({
    name_bank:{type:String},
    data:{type: Date,default: Date.now},
    item:{type:String},
    valor:{type:String}
})


const new_card = new Schema ({
    name:{type:String,required:true,},
    numero:{type:String,required:true,unique: true},
    venc:{type:String,required:true},
    cvv:{type:String,required:true},
    name_bank:{type:String,required:true},
    agencia:{type:String,required:true},
    conta:{type:String,required:true},
    saldo:{type:String,default:"1000,00"},
    limite:{type:String,default:"1000,00"}
})


const schema = new Schema({
    person_email:{
        type: String,
        required: true,
        unique: true
    },
    card_fat:[fatura],
    card_fatCre:[faturaCre],

    cards_list:[new_card],
    DigiList:[DigiCard],
    active:{
        type: Boolean,
        default: true
    }
})



module.exports = mongoose.model('card-info', schema)