module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    point_name: DataTypes.STRING,
    oid: DataTypes.STRING,
    
  });
  return Todo;
};
