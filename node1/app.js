const express = require('express')
const cors = require('cors')
const functions = require('./algo')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

function generateRandomArray(n) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 100))
}

app.get('/secuencial/:uid', (req, res) => {
    const wanted = req.params.uid
    const size = Number(req.query.size)
    const arrElements = generateRandomArray(size)
    const resul = functions.busquedaSecuencial(arrElements, wanted)
    
    if(resul == -1) {
        res.json({ message: 'Valor no encontrado', array: arrElements })
    } else {
        res.json({ message:  `valor encontrado en la posicion: ${resul}`, array: arrElements })
    }
  })

  app.get('/busquedasaltos/:uid', (req, res) => {
    const wanted = req.params.uid
    const size = Number(req.query.size)
    const arrElements = generateRandomArray(size).sort((a, b) => a - b)
    const resul = functions.busquedaPorSaltos(arrElements, wanted)

    if(resul == -1) {
        res.json({ message: 'Valor no encontrado', array: arrElements })
    } else {
        res.json({ message: `valor encontrado en la posicion: ${resul}`, array: arrElements })
    }
  })

app.listen(3000, () => {
  console.log('api ejecutandose en el puerto 3000')
})