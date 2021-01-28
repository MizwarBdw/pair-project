const express = require('express')
const app = express()
const port = 3000

const store = require('./routes/store-route')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(store)


app.listen(port, ()=> {
    console.log(`This app run on port : ${port}`)
})