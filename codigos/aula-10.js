const db = require('../models/index');
const Pessoa = db.Pessoa;

async function criarPessoas() {
	const t = await db.sequelize.transaction();
	try {
		await Pessoa.create({
			nome: 'Gabriel3',
			sobrenome: 'test',
			cpf: '1234567',
			email: 'gabriel@gmail.com',
			rg: '12336',
		}, { transaction: t })
		await Pessoa.create({
			nome: 'Dorgival6',
			sobrenome: 'test',
			cpf: '1234567',
			email: 'dorgival@gmail.com',
			rg: '12336',
		}, { transaction: t })
		
		await t.commit();
		console.log('cadastrou');
	} catch (error) {
		await t.rollback();
		console.log('erro ocorreu')
	}
}

async function criarPessoasTransaction() {
	try {
		const result = await db.sequelize.transaction(async(t) => {
			await Pessoa.create({
				nome: 'Roberto',
				sobrenome: 'test',
				cpf: '1234567',
				email: 'roberto@gmail.com',
				rg: '12336',
			}, { transaction: t })

			await Pessoa.create({
				nome: 'Ana',
				sobrenome: 'test',
				cpf: '1234567',
				email: 'ana@gmail.com',
				rg: '12336',
			}, { transaction: t })
			return true;
		})

		console.log('usuários cadastrados')
	} catch (error) {
		console.log(error)
	}
}
// criarPessoas();
criarPessoasTransaction()