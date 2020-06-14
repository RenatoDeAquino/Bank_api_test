const express = require('express')
const router = express.Router()

router.get('/',(req,res,next) =>{
    res.status(200).send({
        title: "api open banking",
        version: 12.3
    })
})

module.exports = router