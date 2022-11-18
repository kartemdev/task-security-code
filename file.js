const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './files/')
  },
  filename(req, file, cb) {
    cb(null, 'data.json')
  }
})

const upload = multer({
  storage: storage,
})

module.exports = upload; 
