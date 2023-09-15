const express = require('express')
const router = express.Router()
const path = require('path')

//regex to match if '/'is at the beginning '^', or at the end '$' of the string only
//will only match if requested route is only a forward slash '/' or includes 'index'
router.get('^/$|/index(.html)?',(req, res)=>{
    res.sendFile(path.join(__dirname, '..','views', 'index.html'))
} )

module.exports = router