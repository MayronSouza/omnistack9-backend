const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://mayronsouza:joaovivi13@omnistackms-oylq5.mongodb.net/semana09?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)

app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log('Servidor executando...'))