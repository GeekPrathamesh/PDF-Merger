const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const {mergerpdfs} =require("./merge")
app.use('/static', express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"/templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
    console.log(req.files)
    // res.send({data: req.files})
    let d =await mergerpdfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
    res.redirect(`/static/${d}.pdf`)
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
