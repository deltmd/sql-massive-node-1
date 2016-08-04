var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var Massive = require('massive')

var app = module.exports = express()

var port = 4000

app.use(bodyParser({extended: false}))
app.use(cors())

var conString = 'postgres://postgres@localhost/sqlmassivenode'

var massiveInstance = Massive.connectSync({connectionString: conString})

app.set('db', massiveInstance)

var queryCtrl = require('./queryCtrl')

var db = app.get('db')

app.get('/api/products', queryCtrl.readProducts)

app.get('/api/products/:id', queryCtrl.readProduct)

app.post('/api/products', queryCtrl.createProduct)

app.put('/api/products/:id', queryCtrl.updateProduct)

app.delete('/api/products/:id', queryCtrl.deleteProduct)

app.listen(port, function() {
	console.log(`Listening on port ${port}`)
})
