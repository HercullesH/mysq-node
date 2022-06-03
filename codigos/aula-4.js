const db = require('../models/index');
const Pessoa = db.Pessoa;



function criarPessoas() {
	const pessoas = [
		{
			nome: 'joao',
			sobrenome: 'test',
			cpf: '1234567',
			email: 'joao@gmail.com',
			rg: '12336',
		},
		{
			nome: 'maria',
			sobrenome: 'barbosa',
			cpf: '123412567',
			email: 'maria@gmail.com',
			rg: '12336',
		},
		{
			nome: 'gabriel',
			sobrenome: 'test',
			cpf: '1234567',
			email: 'gabriel@gmail.com',
			rg: '12336',
		},
	]
	Pessoa.bulkCreate(pessoas).then(pessoa => console.log(pessoa))
};

criarPessoas();