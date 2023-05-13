const express = require('express')
const mongoose = require('mongoose')
const app = express()

const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const adminRouter = require('./routes/adminUpdates')

const url = "mongodb+srv://rewanadel:12345678910@cluster0.dvzmc2g.mongodb.net/test?authSource=Cluster0&authMechanism=SCRAM-SHA-1"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
const db = mongoose.connection;    


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api/login", authRouter)
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter);
module.exports = app