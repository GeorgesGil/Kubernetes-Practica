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

app.get('/binaria/:uid', (req, res) => {
  const wanted = req.params.uid
  const size = Number(req.query.size)
  const arrElements = generateRandomArray(size)
  const ordenada = functions.burbuja(arrElements)
  const resul = functions.busquedaBinaria(ordenada, Number(wanted))

  if (resul == -1) {
    res.json({ message: 'Binaria: valor no encontrado', array: ordenada })
  } else {
    res.json({ message: `Binaria: valor encontrado en la posicion: ${resul}`, array: ordenada })
  }
});

app.get('/burbuja/:size', (req, res) => {
  const size = Number(req.params.size)
  const arrElements = generateRandomArray(size)
  const resul = functions.burbuja(arrElements)

  res.json({ message: `Burbuja: valores ordenados: ${resul}`})
});

app.listen(3001, () => {
  console.log('api ejecutandose en el puerto 3001')
})