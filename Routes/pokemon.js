const {GetPokemon} = require('../Controllers/pokemon.js')
const express = require('express')
const router = express.Router()

router.get('/getpokemon', GetPokemon)

module.exports = router;