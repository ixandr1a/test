const express = require('express');

const app = express();

const server = require('http').Server(app);

app.use(express.json());

const rooms = new Map();

app.get('/', (req, res) => {
    res.json(rooms)
})

app.post('/', (req, res) => {
    console.log(req.body)
})




server.listen(9999, (err) => {
    if(err){
        throw Error(err);
    }
    console.log('сервер запущен')
})