const {GetPokemon} = require('../Controllers/pokemon.js')
const express = require('express')
const router = express.Router()

router.get('/pokemon', GetPokemon)

module.exports = router;