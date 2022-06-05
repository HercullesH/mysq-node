'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Endereco.belongsTo(models.Pessoa, { foreignKey: 'pessoaId' })
    }
  }
  
  Endereco.init({
	estado: DataTypes.STRING,
	cidade: DataTypes.STRING,
	bairro: DataTypes.STRING,
	rua: DataTypes.STRING,
	numero: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Endereco',
  });
  return Endereco;
};