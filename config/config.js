module.exports = {
	local: {
		environment: "local",
		mongo: {
			host: "127.0.0.1",
			port: "27017",
			database: "envision_local",
		},
		server: {
			host: "127.0.0.1",
			port: "8000"
		}
	},
	dev: {
		environment: "dev",
		mongo: {
			host: "127.0.0.1",
			port: "27017",
			database: "envision_dev",
		},
		server: {
			host: "127.0.0.1",
			port: "8000"
		}
	},
	prod: {
		environment: "prod",
		mongo: {
			host: "127.0.0.1",
			port: "27017",
			database: "envision_prod",
		},
		server: {
			host: "127.0.0.1",
			port: "8000"
		}
	}
};
