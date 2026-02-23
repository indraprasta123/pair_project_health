"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Symptoms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Symptoms.hasMany(models.DiseaseBook, { foreignKey: "SymptomId" });

      Symptoms.belongsToMany(models.Booking, {
        through: models.DiseaseBook,
        foreignKey: "SymptomId",
      });
    }
  }
  Symptoms.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Symptoms",
    },
  );
  return Symptoms;
};
