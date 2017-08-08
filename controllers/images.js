module.exports = function(app, mongoose, passport, router) {
	const Image = mongoose.model("Image");

	router.get('/images', passport.authenticate('bearer', { session: false }), (req, res) => {
		Image
			.find(req.query.where)
			.sort(req.query.sort)
			.skip(req.query.skip)
			.limit(req.query.limit)
			.select(req.query.select)
			.exec((err, images) => {
				if (err) {
					res.status(400).json({ error: err.message });
				} else {
					res.json({ images: images });
				}
			});
	});

	router.get('/images/random', passport.authenticate('bearer', { session: false }), (req, res) => {
		Image.findRandom({}, {}, { limit: 20 }, (err, images) => {
				if (err) {
					res.status(400).json({ error: err.message });
				} else {
					res.json({ images: images });
				}
			});
	});

	router.get('/images/oneRandom', (req, res) => {
		Image.findRandom({}, {}, {}, (err, images) => {
				if (err) {
					res.status(400).json({ error: err.message });
				} else {
					res.json({ images: images });
				}
			});
	});

	router.post('/images', passport.authenticate('bearer', { session: false }), (req, res) => {
		Image.create(req.body, (err, image) => {
			if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.json({ image: image });
			}
		});
	});

	router.get('/images/:id', passport.authenticate('bearer', { session: false }), (req, res) => {
		Image.findOne({ _id: req.params.id }, (err, image) => {
			if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.json({ image: image });
			}
		});
	});

	router.put('/images/:id', passport.authenticate('bearer', { session: false }), (req, res) => {
		Image.findOne({ _id: req.params.id }, (err, image) => {
			if (err) {
				res.status(400).json({ error: err.message });
			} else if (!image) {
				res.status(400).json({ error: "Image not found." });
			} else {
				for (let key in req.body) {
					image[key] = req.body[key];
				}

				image.save((err, image) => {
					if (err) {
						res.status(400).json({ error: err.message });
					} else {
						res.json({ image: image });
					}
				});
			}
		});
	});

	router.delete('/images/:id', passport.authenticate('bearer', { session: false }), (req, res) => {
		Image.findOne({ _id: req.params.id }, (err, image) => {
			if (err) {
				res.status(400).json({ error: err.message });
			} else if (!image) {
				res.status(400).json({ error: "Image not found." });
			} else {
				image.remove((err, image) => {
					if (err) {
						res.status(400).json({ error: err.message });
					} else {
						res.json({ message: "Image removed successfully." });
					}
				});
			}
		});
	});

};
