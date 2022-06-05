const db = require('../models/index');
const Pessoa = db.Pessoa;
const Endereco = db.Endereco;

async function adicionarEndereco(endereco) {
	const enderecoCriado = await Endereco.create(endereco);
	console.log('\n \n \n');
	console.log(enderecoCriado);
}

async function procurarEnderecoPorId(enderecoId) {
	const endereco = await Endereco.findOne({
		where: { id: enderecoId },
		include: [{
			model: Pessoa,
		}],
		raw: true,
		nest: true,
		logging: true,
	})
	console.log(endereco);
}


async function procurarPessoasComEndereco() {
	const pessoa = await Pessoa.findAll({
		include: [{
			model: Endereco,
			required: true,
		}],
		raw: true,
		nest: true,
		logging: true,
	})
	console.log(pessoa);
}

// adicionarEndereco({
// 	bairro: 'Coroa do teste',
// 	estado: 'estado de teste',
// 	cidade: 'cidade para os testes',
// 	rua: 'rua teste 1',
// 	numero: '19a',
// 	pessoaId: 1,
// })

// procurarEnderecoPorId(1)
procurarPessoasComEndereco();