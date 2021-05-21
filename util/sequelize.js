const Sequelize = require("sequelize");

const sequaelize = new Sequelize("gproject", "root", "Dinelos5!", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequaelize;
