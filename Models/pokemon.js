const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  id: Number,
  Name: String,
  Type1: String,
  Type2: String,
  Total: Number,
  HP: Number,
  Attack: Number,
  Defense: Number,
  SpAtk: Number,
  SpDef: Number,
  Speed: Number,
  Generation: Number,
  Legendary: Boolean,
});

const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = Pokemon;
