const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  id: Number,
  Name: String,
  "Type 1": String,
  "Type 2": String,
  Total: Number,
  HP: Number,
  Attack: Number,
  Defense: Number,
  "Sp Attack": Number,
  "Sp Defense": Number,
  Speed: Number,
  Generation: Number,
  Legendary: Boolean,
});

const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = Pokemon;
