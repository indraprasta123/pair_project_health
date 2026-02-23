"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DiseaseBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DiseaseBook.belongsTo(models.Booking, { foreignKey: "BookingId" });
      DiseaseBook.belongsTo(models.Symptoms, { foreignKey: "SymptomId" });
    }
  }
  DiseaseBook.init(
    {
      BookingId: DataTypes.INTEGER,
      SymptomId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DiseaseBook",
    },
  );
  return DiseaseBook;
};
