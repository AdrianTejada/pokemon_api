const {GetPokemon} = require('../Controllers/pokemon.js')
const authoriseUser = require('../Auth/auth')
const express = require('express')
const router = express.Router()

router.get('/getpokemon', GetPokemon)
router.get('/getpokemonauth', authoriseUser, GetPokemon)

module.exports = router;