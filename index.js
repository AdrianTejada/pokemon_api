const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')

const config = require('./config')
const pokemonRouter = require('./Routes/pokemon.js')
const userRouter = require('./Routes/user.js')

const io = new Server(server, {
  cors:{origin:['http://localhost:3000'],
  allowedHeaders:["Access-Control-Allow-Origin"],
  credentials: true
  }
})


const PORT = process.env.PORT || 5000;

mongoose.connect(config.MONGODB_URL, (e)=>{
  if (e){
    console.log(e)
  }
})

app.use(cors())
app.use(express.json())
app.use(pokemonRouter)
app.use(userRouter)

const users = {};

const Pokemon1 = null;

const Pokemon2 = null;

io.on('connection', (socket)=>{
  console.log('a user connected')

  socket.on('user_joined', (username)=>{
    users[socket.id] = {username}
    console.log(users)
  })

  socket.on('disconnect', ()=>{
    delete users[socket.id]
  })

  socket.on('pokemon_1', (pokemon1)=> {
    io.emit('setpokemon_1', pokemon1);
  })

  socket.on('pokemon_2', (pokemon2)=> {
    io.emit('setpokemon_2', pokemon2);
  })

  socket.on('reset', ()=>{
    io.emit('setReset', null)
  })
})


server.listen(PORT, console.log(`running on *:${PORT}`))