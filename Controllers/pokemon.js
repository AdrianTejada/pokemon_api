const Pokemon = require('../Models/pokemon.js')

const GetPokemon = (req, res) => {
  var {txt, gen1, gen2, gen3, gen4, gen5, gen6, show_legendaries } = req.query;

  txt = txt.charAt(0).toUpperCase() + txt.slice(1)

  if (txt === ""){
    res.json("")
  } else {
    if (show_legendaries == 'false') {
      Pokemon.find({ $and: [
        {$or: [
          {Name: {$regex: txt}},
          {Type1: {$regex: txt}},
          {Type2: {$regex: txt}}
        ]},
        {$or:[
          {Generation: gen1},
          {Generation: gen2},
          {Generation: gen3},
          {Generation: gen4},
          {Generation: gen5},
          {Generation: gen6}
        ]}
      ]},(err,data)=>{
        if (err) {
          console.log(err)
        } 
        res.json(data)
      })
    } else {
      Pokemon.find({ $and: [
        {$or: [
          {Name: {$regex: txt}},
          {Type1: {$regex: txt}},
          {Type2: {$regex: txt}}]},
        {$or:[
          {Generation: gen1},
          {Generation: gen2},
          {Generation: gen3},
          {Generation: gen4},
          {Generation: gen5},
          {Generation: gen6}
        ]},
        {Legendary: show_legendaries}
    ]},(err,data)=>{
        if (err) {
          console.log(err)
        } 
        res.json(data)
      })
    }
  }
}

module.exports = {GetPokemon}