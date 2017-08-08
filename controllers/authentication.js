module.exports = function(app, mongoose, passport, router) {
	const User = mongoose.model("User");

	router.post('/authentication/signup', (req, res) => {
		if (!req.body.email || !req.body.password) {
			res.status(400).json({ error: "Please provide an email address and password." });
			return;
		}

		User.create({
			email: req.body.email,
			password: req.body.password
		}, (err, user) => {
			if (err) {
				res.status(400).json({ error: err.message });
				return;
			}

			user.login((err, user, token) => {
				if (err) {
					res.status(400).json({ error: err.message });
					return;
				}

				res.json({ user: user, token: token });
			});
		});
	});

	router.post('/authentication/login', (req, res) => {
		if (!req.body.email || !req.body.password) {
			res.status(400).json({ error: "Please provide an email address and password." });
			return;
		}

		User.findOne({ email: req.body.email }, (err, user) => {
			if (!user || !user.isValidPassword(req.body.password)) {
				res.status(400).json({ error: "Incorrect username or password." });
				return;
			}

			user.login((err, user, token) => {
				req.user = user;
				res.json({ user: user, token: token });
			});
		});
	});

	router.delete('/authentication/logout', passport.authenticate('bearer', { session: false }), (req, res) => {
		let token = req.get('authorization').replace("Bearer ", "");

		req.user.logout(token, (err, user) => {
			if (err) {
				res.status(400).json({ err: err });
				return;
			}

			res.send({ message: "Logout successful." });
		});
	});
};
