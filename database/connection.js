const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-sequelization", "root", "RahulP@12345", {
  host: "localhost",
  dialect: "mysql",
  pool: { max: 5, min: 0, idle: 10000 },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("ERROR" + err);
  });



