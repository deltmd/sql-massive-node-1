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

		// NOTE: The way Jeremy taught:

		// var product = [req.params.id, req.body.name, req.body.description, req.body.price, req.body.imgurl]
		//
		// db.queries.update_product(product, function(err, response) {
		// 	if (err) {
		// 		res.send(err)
		// 	}
		// 	res.sendStatus(200)
		// })

		// NOTE: The faster way:

		// var product = {
		// 	id: req.params.id,
		// 	price: req.body.price,
		// 	description: req.body.description
		// }

		// db.products.update(product, function(err, response){
		//   if (err) {
		//     res.send(err)
		//   }
		//   res.send(response)
		// });

		// NOTE: The fastest way:

		db.products.update(req.query, function(err, response) {
			if (err) {
				res.send(err)
			}
			res.send(response)
		});

	},

	deleteProduct: function(req, res) {

		db.queries.delete_product(req.params.id, function(err, response) {
			if (err) {
				res.send(err)
			}
			res.sendStatus(200)
		})
	}
}
