const express = require('express')
const bodyParser = require('body-parser')
const { db } = require('../models/user')

const stockRouter = express.Router()
stockRouter.use(bodyParser.json())

stockRouter.get('', async (req, res, next) => {
  try {

    const data1 = await db.collection('sensex').findOne()
    const data2 = await db.collection('nifty').findOne()
    let data = [data1, data2]
    data.forEach(ele => {
      for (const key in ele) {
        if (ele.hasOwnProperty(key)) {
          const element = ele[key];
          if (key !== 'Date') {
            ele[key] = parseFloat(ele[key])
          }
        }
      }
    })
    res.status(200).send({ data })
  } catch (error) {
    res.status(400).send({ message: 'Unable to fetch. Try again...' })
  }
})

stockRouter.get('/organization/:name/:year', async (req, res, next) => {
  let result = new Array(12).fill(0)
  const org = req.params.name;
  const year = req.params.year;
  try {
    const data = await db.collection(org).find({ Date: { "$regex": year } }).toArray()
    data.forEach(ele => {
      const month = ele.Date.split('-')[1]
      if (ele.Volume > 0) {
        result[month - 1] += (+ele.Volume) / 10000000
      }
    })
    res.status(200).send({ data: result })
  } catch (error) {
    res.status(400).send({ message: 'Unable to fetch. Try again...' })
  }
})

module.exports = { stockRouter }
