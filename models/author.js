module.exports = (sequelize, DataTypes) => {
    var Author = sequelize.define("Author", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });
  
  
    Author.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Author.hasMany(models.Problem, {
        onDelete: "cascade"
      });
    };
  
    return Author;
  };
  