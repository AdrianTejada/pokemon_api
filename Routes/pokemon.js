const {GetPokemon} = require('../Controllers/pokemon.js')
const authoriseUser = require('../Auth/auth')
const express = require('express')
const router = express.Router()

// router.get('/getpokemon', authoriseUser, GetPokemon)
router.get('/getpokemon', GetPokemon)

router.get('/', (req, res)=> {
    res.send('home')
})

module.exports = router;