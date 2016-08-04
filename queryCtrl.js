var app = require('./index')
var db = app.get('db')

module.exports = {
	readProducts: function(req, res) {

		db.queries.read_products(function(err, response) {
			if (err) {
				res.send(err)
			}
			res.send(response)
		})
	},

	readProduct: function(req, res) {

		db.queries.read_product(req.params.id, function(err, response) {
			if (err) {
				res.send(err)
			}
			res.send(response)
		})
	},

	createProduct: function(req, res) {

		var product = [req.body.name, req.body.description, req.body.price, req.body.imgurl]

		db.queries.create_product(product, function(err, response) {
			if (err) {
				res.send(err)
			}
			res.sendStatus(200)
		})
	},

	updateProduct: function(req, res) {

		var product = [req.params.id, req.body.name, req.body.description, req.body.price, req.body.imgurl]

		db.queries.update_product(product, function(err, response) {
			if (err) {
				res.send(err)
			}
			res.sendStatus(200)
		})
	}, // FIXME: Detect parameters?

	deleteProduct: function(req, res) {

		db.queries.delete_product(req.params.id, function(err, response) {
			if (err) {
				res.send(err)
			}
			res.sendStatus(200)
		})
	}
}
