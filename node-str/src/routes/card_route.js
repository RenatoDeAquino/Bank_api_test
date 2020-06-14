const express = require('express')
const router = express.Router()
const controller = require ('../controllers/card_controller')
const fatura = require('../controllers/fatura')

router.post('/', controller.post)
//router.get('/fatura/:card_number', controller.getFat)
router.get('/limite/:card_number', controller.getLim)
router.get('/saldo/:card_number', controller.getSal)
router.get('/numero_card/:person_cpf', controller.getNumCard)
router.get('/person/:person_cpf', controller.getPerson)
router.put('/Altera-saldo', controller.alteraSaldo)
router.put('/Altera-limite', controller.alteraLimite)
//router.post('/Altera-fatura/:card_number', controller.alteraFatura)



//parte da desgraça da fatura
router.get("/fatura_check/:card_number",fatura.mostra_fatura);
router.post("/Altera_fatura/:card_number",fatura.atualiza_fatura);


router.delete('/', controller.delete)


module.exports = router