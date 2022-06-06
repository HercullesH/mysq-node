'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
		Pessoa.hasOne(models.Endereco, { foreignKey: 'pessoaId' })
		Pessoa.hasMany(models.Telefone, { foreignKey: 'pessoaId' })
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
	rg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
	tableName: 'pessoas',
  });
  return Pessoa;
};