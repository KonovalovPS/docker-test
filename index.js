const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  fs.readFile('./files/data.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
    const obj = JSON.parse(data)
    res.send(`${obj.greeting} ${new Date()}`)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})