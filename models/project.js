module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Projects', {
    project_name: DataTypes.STRING,
    project_status: DataTypes.ENUM('New', 'Active', 'Hold', 'Complete'),
  });
  return Project;
};