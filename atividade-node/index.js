const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express()

server.listen(3002)
server.use(cors())
server.use(bodyParser.urlencoded({extended: true}))

const animals = [
    {"name": "Cavalo"},
    {"name": "Vaca"},
    {"name": "Galinha"},
    {"name": "Anta"},
]

server.get('/', () => {
    console.log('executando a rota com o GET + nodemon atualizado')
})

//List

server.get('/animals', (req,res) => {
    return res.json(animals)
});

//adiciona
server.post('/animals', (req,res) => {
    const {name} = req.body;
    animals.push({"name": name});
    return res.json(animals)
})

//atualiza
server.put('/animals/:id', (req,res) => {
    const {index} = req.body;
    const {name} = req.body;

    animals[index] = {
        "name": name
    }

    return res.json(animals)
})

//deleta
server.delete('/animals/:id', (req,res) => {
    const {index} = req.body;
    animals.splice(index,1);
    return res.json(animals)
})