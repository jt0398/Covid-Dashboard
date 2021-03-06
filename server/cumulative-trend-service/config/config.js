require("dotenv").config();

module.exports = {
  development: {
    database: process.env.RDS_DATABASE1,
    username: process.env.RDS_USERNAME1,
    password: process.env.RDS_PASSWORD1,
    host: process.env.RDS_HOSTNAME1,
    port: process.env.RDS_PORT1,
    dialect: "postgres",
  },
  production: {
    use_env_variable: "CumulativeJDBCURI",
    dialect: "postgres",
  },
};
