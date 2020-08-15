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
    res.send({ data })
  } catch (error) {
    console.log(error);
  }
})

module.exports = { stockRouter }
