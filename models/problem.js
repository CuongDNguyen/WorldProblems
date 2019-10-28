module.exports = function(sequelize, DataTypes) {
  var Problem = sequelize.define("Problem", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  Problem.associate = function(models) {
    // We're saying that a problem should belong to an Author
    // A problem can't be created without an Author due to the foreign key constraint
    Problem.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Problem;
};
