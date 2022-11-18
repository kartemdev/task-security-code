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
        if (req.file.mimetype === 'application/json') {
          const file = fs.readFileSync(`./${req.file.path}`)
          res.json(JSON.parse(file))
        } else {
          res.json({ message: 'invalidMimetype' })
        }
      }
      
    } catch (error) {
      console.log('server error upload --->', error);
    }
  })

app.post('/save', (req, res) => {
  try {
    console.log(req.body);

    const { json } = req.body
    fs.writeFileSync('./files/data.json', JSON.stringify(json), (error) => console.log(error))
    res.json({ message: 'save-done' })
  } catch (error) {
    res.json({ message: 'save-error' })
    console.log('server error save --->', error);
  }
})

app.post('')

app.listen(3001, () => console.log('Server started...'))
