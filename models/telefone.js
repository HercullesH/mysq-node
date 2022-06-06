'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telefone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Telefone.belongsTo(models.Pessoa, { foreignKey: 'pessoaId' });
    }
  }
  Telefone.init({
    numero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Telefone',
	tableName: 'telefones'
  });
  return Telefone;
};