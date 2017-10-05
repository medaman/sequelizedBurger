module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: { args: [1,20], msg:"Between 1 and 20 characters" } }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    timestamps: true
  });
  
  return Burger;
}
