const express = require('express')
var cors = require('cors')
const router = express.Router()
const controller = require ('../controllers/card_controller')
const fatura = require('../controllers/fatura')
const card_list = require('../controllers/card')
const add_card = require('../controllers/newCard')
const sai_card = require('../controllers/deleta')
const saldo = require('../controllers/saldo_limite')
const faturaCre = require('../controllers/faturaCre')
const DigiCard = require('../controllers/DigiCard')

router.post('/', cors(), controller.post)

router.put('/alter_saldo/:_id', cors(),saldo.alter_saldo)
router.put('/alter_limite/:_id/', cors(),saldo.alter_limite)

router.delete('/sai_cartao/:_id',cors(),sai_card.sai_card)

//parte da desgraça da fatura debito
router.get("/mostra/:person_email",cors(),fatura.mostra_fatura);
router.post("/Altera_fatura/:person_email",cors(),fatura.atualiza_fatura);
//parte da desgraça da fatura credito
router.get("/mostraCre/:person_email",cors(),faturaCre.mostra_fatura);
router.post("/Altera_faturaCre/:person_email",cors(),faturaCre.atualiza_fatura);
//parte do digi card
router.post("/add_DigiCard/:person_email",cors(),DigiCard.add_card);
router.get("/DigiList/:person_email",cors(),DigiCard.mostra_card)
router.delete('/sai_Digicartao/:_id',cors(),DigiCard.sai_card)

//parte do card novo

router.get("/card_list/:person_email",cors(),card_list.mostra_card);
router.post("/altera-card-list/:person_email",cors(),card_list.atualiza_card_list);

router.post("/add_card/:person_email",cors(),add_card.add_card);




module.exports = router