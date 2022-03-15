const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config')
const pokemonRouter = require('./Routes/pokemon.js')
const userRouter = require('./Routes/user.js')

mongoose.connect(config.MONGODB_URL, (e)=>{
  if (e){
    console.log(e)
  }
})

app.use(express.json())
app.use(pokemonRouter)
app.use(userRouter)
app.listen(8888, console.log('app running'))