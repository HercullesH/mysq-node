const db = require('../models/index');
const Pessoa = db.Pessoa;
const Op = db.Sequelize.Op;
// documentação sobre query https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

// SELECT * FROM pessoas where id = 500;

// SELECT nome, sobrenome from pessoas where nome = 'Jerrie'

// SELECT * FROM pessoas where id in (1, 2, 3, 4);

// SELECT * FROM pessoas LIMIT 10 OFFSET 990;

// SELECT * FROM pessoas where nome LIKE 'Ro%' LIMIT 10;

// SELECT * FROM pessoas where id <= 5 or sobrenome = 'Harpham'


function encontrarPorId(id) {
	// SELECT * FROM pessoas where id = 500;

	Pessoa.findByPk(id).then(pessoa => {
		console.log('\n \n \n')
		console.log(JSON.stringify(pessoa));
	})
}

function encontrarPorNome(nome) {
	// SELECT nome, sobrenome from pessoas where nome = 'Jerrie'
	Pessoa.findOne({
		attributes: ['nome', 'sobrenome'],
		where: {
			nome: nome,
		},
		raw: true,
	}).then(pessoa => {
		console.log('\n \n \n');
		console.log(pessoa);
	})
}

function encontrarComIdIn(arrayIds) {
	// SELECT * FROM pessoas where id in (1, 2, 3, 4);
	Pessoa.findAll({
		where: {
			id: arrayIds,
		},
		raw: true,
	}).then(pessoa => {
		console.log('\n \n \n');
		console.log(pessoa);
	})
}

function encontrarComOffsetELimit() {
	// SELECT * FROM pessoas LIMIT 10 OFFSET 990;

	Pessoa.findAll({
		offset: 990,
		limit: 10,
		raw: true,
	}).then(pessoa => {
		console.log('\n \n \n');
		console.log(pessoa);
	})
}

function encontrarComLike() {
	// SELECT * FROM pessoas where nome LIKE 'Ro%' LIMIT 10;

	Pessoa.findAll({
		where: {
			nome: {
				[Op.like]: 'Ro%'
			},
		},
		limit: 10,
		raw: true,
	}).then(pessoa => {
		console.log('\n \n \n');
		console.log(pessoa);
	})
}

function encontrarUtilizandoOperadores() {
	// SELECT * FROM pessoas where id <= 5 or sobrenome = 'Harpham'

	Pessoa.findAll({
		where: {
			[Op.or]: [
				{
					id: {
						[Op.lte]: 5
					}
				},
				{
					sobrenome: 'Harpham'
				}
			]
		},
		raw: true,
	}).then(pessoa => {
		console.log('\n \n \n');
		console.log(pessoa);
	})
}

// encontrarPorId(500);
// encontrarPorNome('Jerrie');
// encontrarComIdIn([1, 2, 3, 4])
// encontrarComOffsetELimit();
// encontrarComLike()
encontrarUtilizandoOperadores()