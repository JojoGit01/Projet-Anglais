const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userRouter = require('./Router/user.router')
const dataCasRouter = require('./Router/dataCas.router')
const informationUnderCardRouter = require('./Router/informationUnderCard.router')


const app = express()
const port = 4000
const uri = "mongodb+srv://admin:h5fwP7nOC1k4FdMC@cluster0.meaig.mongodb.net/projectEnglish?retryWrites=true";


// Middleware
app.use(express.json());
app.use(cors())

app.use('/user', userRouter)
app.use('/dataCas', dataCasRouter)
app.use('/informationCardUnder', informationUnderCardRouter)


// DB config
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection


connection.once('open', () => {
    console.log("MongoDb data send good !")
})

app.listen( port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
