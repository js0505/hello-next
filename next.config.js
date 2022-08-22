const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_address: "mongodb://127.0.0.1",
				mongodb_dbname: "nextProject",
			},
		}
	}

	return {
		env: {
			mongodb_address: "mongodb://127.0.0.1",
			mongodb_dbname: "nextProject",
		},
	}
}
