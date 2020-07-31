require("dotenv").config();

module.exports = {
  development: {
    database: process.env.RDS_DATABASE3,
    username: process.env.RDS_USERNAME3,
    password: process.env.RDS_PASSWORD3,
    host: process.env.RDS_HOSTNAME3,
    port: process.env.RDS_PORT3,
    dialect: "postgres",
  },
  production: {
    use_env_variable: "NationalJDBCURI",
    dialect: "postgres",
  },
};
