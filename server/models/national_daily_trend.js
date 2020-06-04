"use strict";
module.exports = (sequelize, DataTypes) => {
  const National_Daily_Trend = sequelize.define(
    "National_Daily_Trend",
    {
      dateReported: {
        type: DataTypes.DATEONLY,
        primaryKey: true,
      },
      confirmed: DataTypes.INTEGER,
      active: DataTypes.INTEGER,
      recovered: DataTypes.INTEGER,
      deceased: DataTypes.INTEGER,
      tested: DataTypes.INTEGER,
    },
    { freezeTableName: true }
  );
  National_Daily_Trend.associate = function (models) {
    // associations can be defined here
  };
  return National_Daily_Trend;
};
