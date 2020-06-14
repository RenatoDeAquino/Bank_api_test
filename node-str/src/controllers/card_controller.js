const mongoose = require('mongoose')
const Infos = mongoose.model('card-info')
const repository = require('../repositories/info_repository')

exports.post = (req, res, next) => {
    var info = new Infos()
    info.person_name = req.body.person_name
    info.person_cpf = req.body.person_cpf
    info.card_number = req.body.card_number
    info.card_cvv = req.body.card_cvv
    info.card_exp = req.body.card_exp
    info.card_limit = req.body.card_limit
    info.card_saldo = req.body.card_saldo
    info.active = req.body.active
    info.card_fat = req.body.card_fat
    info.fatura = req.body.fatura
    
    
    info.save().then(x=>{
        res.status(201).send({message: 'pessoa cadastrada com sucesso'})
    }).catch(e =>{
        res.status(400).send({
            message:"falaha ao cadastrar o produto",
            data:e
        })
    })
    
}
//secão dos gets
exports.getFat = (req,res,next) => {
    repository
        .getFat(req.params.card_number)
        .then(data => {
            res.status(200).send(data)
        }).catch(e => {
            res.status(400).send(e)
        })
}

exports.getNumCard = (req,res,next) => {
    repository
        .getNumCard(req.params.person_cpf)
        .then(data => {
            res.status(200).send(data)
        }).catch(e => {
            res.status(400).send(e)
        })
}

exports.getPerson = (req,res,next) => {
    repository
        .getNumCard(req.params.person_cpf)
        .then(data => {
            res.status(200).send(data)
        }).catch(e => {
            res.status(400).send(e)
        })
}



exports.getLim = (req,res,next) => {
    repository
        .getLim(req.params.card_number)
        .then(data => {
            res.status(200).send(data)
        }).catch(e => {
            res.status(400).send(e)
        })
}

exports.getSal = (req,res,next) => {
    repository
        .getSal(req.params.card_number)
        .then(data => {
            res.status(200).send(data)
        }).catch(e => {
            res.status(400).send(e)
        })
}
//-----------------------------------------


exports.delete = (req, res, next) => {
    res.status(200).send(req.body)
}

//seção dos puts
exports.alteraSaldo = (req,res,next) => {
    repository
    .alteraSaldo(req.params.card_number, req.body)
    .then(x => {
        res.status(201).send({
            message: 'valor alterado com sucesso'
        })
    }).catch(e => {
        res.status(400).send({
            message:"Erro na alteração",
            data: e
        })
    }) 
}

exports.alteraLimite = (req,res,next) => {
    repository
    .alteraLimite(req.params.card_number, req.body)
    .then(x => {
        res.status(201).send({
            message: 'valor alterado com sucesso'
        })
    }).catch(e => {
        res.status(400).send({
            message:"Erro na alteração",
            data: e
        })
    }) 
}

exports.alteraFatura = (req,res,next) => {
    repository
    .alteraFat(req.params.card_number,req.body)
    .then(x => {
        res.status(201).send({
            message: 'valor alterado com sucesso'
        })
    }).catch(e => {
        res.status(400).send({
            message:"Erro na alteração",
            data: e
        })
})} 
