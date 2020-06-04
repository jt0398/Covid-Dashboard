"use strict";
module.exports = (sequelize, DataTypes) => {
  const National_History = sequelize.define(
    "National_History",
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
  National_History.associate = function (models) {
    // associations can be defined here
  };
  return National_History;
};
