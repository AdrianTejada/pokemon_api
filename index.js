const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config')

const router = require('./Routes/pokemon.js')

mongoose.connect(config.MONGODB_URL, (e)=>{
  console.log(e)
})

app.get('/', (req,res)=>{
  res.json({'hello':'hello'})
})

app.use(express.json())

app.use(router)

app.listen(3000, console.log('app running'))