require("dotenv").config();

module.exports = {
  development: {
    database: process.env.RDS_DATABASE2,
    username: process.env.RDS_USERNAME2,
    password: process.env.RDS_PASSWORD2,
    host: process.env.RDS_HOSTNAME2,
    port: process.env.RDS_PORT2,
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DailyJDBCURI",
    dialect: "postgres",
  },
};
