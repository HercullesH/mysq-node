const db = require('../models/index');
const sequelize = db.sequelize;

https://sequelize.org/docs/v6/core-concepts/raw-queries/

// SELECT * FROM pessoas where id = 500;

// SELECT nome, sobrenome from pessoas where nome = 'Jerrie'

// SELECT * FROM pessoas where id in (1, 2, 3, 4);

// SELECT * FROM pessoas LIMIT 10 OFFSET 990;

// SELECT * FROM pessoas where nome LIKE 'Ro%' LIMIT 10;

// SELECT * FROM pessoas where id <= 5 or sobrenome = 'Harpham'


function encontrarPorId(idPessoa) {
	// SELECT * FROM pessoas where id = 500;

	sequelize.query(
		'SELECT * FROM pessoas where id = :id',
		{
			replacements: { id: idPessoa },
			type: sequelize.QueryTypes.SELECT,
			raw: true,
			plain: true
		}
	).then(pessoa => {
		console.log('\n \n \n')
		console.log(pessoa);
	})
}

function encontrarPorNome(nomePessoa) {
	// SELECT nome, sobrenome from pessoas where nome = 'Jerrie'

	sequelize.query(
		"SELECT nome, sobrenome from pessoas where nome = :nome",
		{
			replacements: { nome: nomePessoa },
			type: sequelize.QueryTypes.SELECT,
			raw: true,
			plain: true
		}
	).then(pessoa => {
		console.log('\n \n \n')
		console.log(pessoa);
	})
}

function encontrarComIdIn(arrayIds) {
	// SELECT * FROM pessoas where id in (1, 2, 3, 4);
	sequelize.query(
		"SELECT * FROM pessoas where id in (:arrayIds)",
		{
			replacements: { arrayIds },
			type: sequelize.QueryTypes.SELECT,
			raw: true,
		}
	).then(pessoa => {
		console.log('\n \n \n')
		console.log(pessoa);
	});
}


function encontrarComOffsetELimit() {
	// SELECT * FROM pessoas LIMIT 10 OFFSET 990;

	sequelize.query(
		"SELECT * FROM pessoas LIMIT 10 OFFSET 990;",
		{
			type: sequelize.QueryTypes.SELECT,
			raw: true,
		}
	).then(pessoa => {
		console.log('\n \n \n')
		console.log(pessoa);
	});
}

function encontrarComLike(replacements) {
	// SELECT * FROM pessoas where nome LIKE 'Ro%' LIMIT 10;

	sequelize.query(
		"SELECT * FROM pessoas where nome LIKE :nome LIMIT :limit;",
		{
			replacements: replacements,
			type: sequelize.QueryTypes.SELECT,
			raw: true,
		}
	).then(pessoa => {
		console.log('\n \n \n')
		console.log(pessoa);
	});
}

function encontrarUtilizandoOperadores(replacements) {
	// SELECT * FROM pessoas where id <= 5 or sobrenome = 'Harpham'

	sequelize.query(
		"SELECT * FROM pessoas where id <= :id or sobrenome = :sobrenome ;",
		{
			replacements,
			type: sequelize.QueryTypes.SELECT,
			raw: true,
		}
	).then(pessoa => {
		console.log('\n \n \n')
		console.log(pessoa);
	});
}

// encontrarPorId(500);
// encontrarPorNome('Jerrie');
// encontrarComIdIn([1, 2, 3, 4])
// encontrarComOffsetELimit();
// encontrarComLike({
// 	nome: 'Ro%',
// 	limit: 10,
// })
encontrarUtilizandoOperadores({
	id: 5,
	sobrenome: 'Harpham',
})