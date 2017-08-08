const bcrypt = require('bcrypt-nodejs');
const request = require("request");

module.exports = function(config, mongoose) {
	const Schema = mongoose.Schema;
	const schema = Schema({
		email: {
			type: String,
			validate: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/,
			required: true,
			unique: true,
			uniqueCaseInsensitive: true
		},
		level: {
			type: Number,
			default: 0
		},
		password: {
			type: String,
			required: true
		},
		resetHash: String,
		tokens: [{
			expiresAt: Date
		}]
	}, {
		timestamps: true
	});

	schema.index({ email: 1 }, { unique: true });

	schema.pre('save', function(next) {
		if (this.isModified('email')) {
			this.email = this.email.toLowerCase();
		}

		if (this.isModified('password')) {
			this.password = this.constructor.getPasswordHash(this.password);
		}

		return next();
	});

	/**
	 * Hash a password.
	 * @param {String} password The password to hash.
	 * @return {String} The hashed password.
	 */
	schema.statics.getPasswordHash = function(password) {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
	}

	/**
	 * Gets the expiration date for access tokens.
	 * @return {Date} The date the token expires.
	 */
	schema.statics.getTokenExpirationDate = function() {
		let expiration = new Date();
		expiration.setDate(expiration.getDate() + 30);

		return expiration;
	}

	/**
	 * Check if the given password matches the user's password.
	 * @param {String} password The password to check.
	 * @return {Boolean} True if the passwords match, false otherwise.
	 */
	schema.methods.isValidPassword = function(password) {
		return bcrypt.compareSync(password, this.password);
	}

	/**
	 * Logs a user in.
	 * @param {Callback} next The callback.
	 * @param {Object} next.user The user that was logged in.
	 * @param {String} next.token The access token created upon login.
	 */
	schema.methods.login = function(next) {
		let User = this.constructor;

		User.findOneAndUpdate({
			_id: this._id
		}, {
			$push: {
				"tokens": {
					expiresAt: User.getTokenExpirationDate()
				}
			}
		}, {
			new: true
		}, (err, user) => {
			if (err) console.error(err);

			let token = user.tokens[user.tokens.length - 1]._id;

			if (next) return next(err, user, token);
		});
	}

	/**
	 * Refreshes the given token's expiration date.
	 * @param {String} token The token's ID.
	 * @param {Callback} next The callback.
	 * @param {Object} next.user The updated user.
	 */
	schema.methods.refreshToken = function(token, next) {
		let User = this.constructor;

		User.findOneAndUpdate({
			_id: this._id,
			"tokens._id": token
		}, {
			"tokens.$.expiresAt": User.getTokenExpirationDate()
		}, {
			new: true
		}, (err, user) => {
			if (err) console.error(err);

			return next(err, user);
		});
	}

	/**
	 * Logs the user out.
	 * @param {String} token The access token to be cleared.
	 * @param {Callback} next The callback.
	 * @param {Object} next.user The updated user.
	 */
	schema.methods.logout = function(token, next) {
		let User = this.constructor;

		if (!token) {
			let error = { message: "A valid access token must be used for logout." };
			return next(error);
		}

		User.findOneAndUpdate({
			_id: this._id
		}, {
			$pull: {
				tokens: {
					_id: token
				}
			}
		}, {
			new: true
		}, function(err, user) {
			if (err) console.error(err);

			return next(null, user);
		});
	}

	return mongoose.model('User', schema);
}
