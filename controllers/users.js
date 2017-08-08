module.exports = function(app, mongoose, passport, router) {
	const User = mongoose.model("User");

	router.get('/users', passport.authenticate('bearer', { session: false }), (req, res) => {
		User
			.find(req.query.where)
			.sort(req.query.sort)
			.skip(req.query.skip)
			.limit(req.query.limit)
			.select(req.query.select)
			.exec((err, users) => {
				if (err) {
					res.status(400).json({ error: err.message });
				} else {
					res.json({ users: users });
				}
			});
	});

	router.post('/users', passport.authenticate('bearer', { session: false }), (req, res) => {
		User.create(req.body, (err, user) => {
			if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.json({ user: user });
			}
		});
	});

	router.get('/users/:id', passport.authenticate('bearer', { session: false }), (req, res) => {
		User.findOne({ _id: req.params.id }, (err, user) => {
			if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.json({ user: user });
			}
		});
	});

	router.put('/users/:id', passport.authenticate('bearer', { session: false }), (req, res) => {
		User.findOne({ _id: req.params.id }, (err, user) => {
			if (err) {
				res.status(400).json({ error: err.message });
			} else if (!user) {
				res.status(400).json({ error: "User not found." });
			} else {
				for (let key in req.body) {
					user[key] = req.body[key];
				}

				user.save((err, user) => {
					if (err) {
						res.status(400).json({ error: err.message });
					} else {
						res.json({ user: user });
					}
				});
			}
		});
	});

	router.delete('/users/:id', passport.authenticate('bearer', { session: false }), (req, res) => {
		User.findOne({ _id: req.params.id }, (err, user) => {
			if (err) {
				res.status(400).json({ error: err.message });
			} else if (!user) {
				res.status(400).json({ error: "User not found." });
			} else {
				user.remove((err, user) => {
					if (err) {
						res.status(400).json({ error: err.message });
					} else {
						res.json({ message: "User removed successfully." });
					}
				});
			}
		});
	});

};
