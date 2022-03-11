const Pokemon = require('../Models/pokemon.js')

const GetPokemon = (req, res) => {
  const {txt, gen1, gen2, gen3, gen4, gen5, gen6, show_legendaries } = req.body;

  Pokemon.find({},(err,data)=>{
    res.json(data)
  })
}

module.exports = {GetPokemon}