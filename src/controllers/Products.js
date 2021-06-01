const fs = require('fs');

module.exports = {
	async create(req, res) {
		const produto = [];

		produto.push({
			name: "dsadad22s",
			produto: "sada2222sd",
    });
    return res.send('cheguei aqui');
	},
};
