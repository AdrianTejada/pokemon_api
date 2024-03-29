const {GetPokemon} = require('../Controllers/pokemon.js')
const authoriseUser = require('../Auth/auth')
const express = require('express')
const router = express.Router()

router.get('/getpokemon', authoriseUser, GetPokemon)

module.exports = router;