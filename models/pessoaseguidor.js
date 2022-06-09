'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PessoaSeguidor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PessoaSeguidor.init({
	  pessoaId: DataTypes.INTEGER,
	  seguePessoaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PessoaSeguidor',
	tableName: 'pessoa_seguidores'
  });
  return PessoaSeguidor;
};