const Pokemon = require('../Models/pokemon.js')

const GetPokemon = (req, res) => {
  Pokemon.find({},(err,data)=>{
    res.json(data)
    
  })
}

module.exports = {
  GetPokemon
}