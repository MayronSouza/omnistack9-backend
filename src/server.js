const express = require('express') // Importando o Express
const mongoose = require('mongoose')// Importando o Mongoose
const cors = require('cors')

const routes = require('./routes')

const app = express()// Criando a Aplicação

mongoose.connect('mongodb+srv://mayronsouza:joaovivi13@omnistackms-oylq5.mongodb.net/semana09?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3333, () => console.log('Servidor executando...'))