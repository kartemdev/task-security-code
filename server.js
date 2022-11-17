const express = require('express')
const path = require('path')
const upload = require('./file')
const cors = require('cors')
const fs = require('fs')

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({  extended: false  }))
app.use('/files', express.static(path.join('files')))

app.post('/upload', upload.single('JSONFILE'), (req, res) => {
    try {
      if (req.file) {
        const file = fs.readFileSync(`./${req.file.path}`)
        res.json(JSON.parse(file))
      }
      
    } catch (error) {
      console.log('server error --->', error);
    }
  })

app.post('')

app.listen(3001, () => console.log('Server started...'))
