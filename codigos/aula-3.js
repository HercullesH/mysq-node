const db = require('../models/index');
const Pessoa = db.Pessoa;

function criarPessoa() {
	Pessoa.create({
		nome: 'joao',
		sobrenome: 'test',
		cpf: '1234567',
		email: 'joao@gmail.com',
		rg: '12336',
	}).then(pessoa => console.log(pessoa))
};

function atualizarPessoa(id) {
	Pessoa.update({
		cpf: '000.000.000-00',
		rg: '123.3213123',
	}, {
		where: {
			id: id
		},
	}).then(pessoa => console.log(pessoa))
}

function deletarPessoa(id) {
	Pessoa.destroy({
		where: {
			id
		}
	})
}

deletarPessoa(1);

// atualizarPessoa(1)
// criarPessoa();

