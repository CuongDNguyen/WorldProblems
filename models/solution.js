module.exports = function(sequelize, DataTypes) {
    var Solution = sequelize.define("Solution", {
      description: DataTypes.TEXT
    });
    Solution.associate = function(models) {
      // We're saying that a solution should belong to an Author
      // A solution can't be created without an Author due to the foreign key constraint
      Solution.belongsTo(models.Problem, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Solution;
  };
  