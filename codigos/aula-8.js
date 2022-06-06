const db = require('../models/index');
const Pessoa = db.Pessoa;
const Telefone = db.Telefone;
const Endereco = db.Endereco;

async function adicionarTelefone(telefone) {
	const telefoneCriado = await Telefone.create(telefone);
	console.log(telefoneCriado);
}

async function encontrarPessoaComTelefone(idPessoa, idTelefones) {
	const pessoa = await Pessoa.findOne({
		where: { id: idPessoa },
		include: [
			{
				model: Telefone,
				where: { id: idTelefones }
			},
			{
				model: Endereco
			}
		],
	})

	console.log(JSON.parse(JSON.stringify(pessoa)));
}

// adicionarTelefone({
// 	numero :'11984138513',
// 	pessoaId: 1,
// })

// adicionarTelefone({
// 	numero :'11954135137',
// 	pessoaId: 1,
// })

encontrarPessoaComTelefone(1, 4)