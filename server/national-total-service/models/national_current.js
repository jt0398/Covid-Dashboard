"use strict";
module.exports = (sequelize, DataTypes) => {
  const National_Current = sequelize.define(
    "National_Current",
    {
      confirmed: DataTypes.INTEGER,
      active: DataTypes.INTEGER,
      recovered: DataTypes.INTEGER,
      deceased: DataTypes.INTEGER,
      tested: DataTypes.INTEGER,
    },
    { freezeTableName: true }
  );
  National_Current.associate = function (models) {
    // associations can be defined here
  };
  return National_Current;
};
