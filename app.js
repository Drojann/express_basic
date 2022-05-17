//objeto express
const express = require ('express')
//app express
const app = express()
//puerto
const port = 3000

//path inicial
app.get('/', (req, res) => {
    res.send(`Hello World!`)
})

//respondiendo texto
app.get('/launchx', (req, res) => {
    res.send(`Bienvenidos a launch X`)
})

//regresando un objeto
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "explorer", msg: "hello"}
    res.send(explorer)
})

//quary params
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

//iniciar app
app.listen(port, () =>{
    console.log(`Example app listening on port: ${port}`)
})