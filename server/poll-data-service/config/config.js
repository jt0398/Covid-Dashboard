require("dotenv").config();

module.exports = {
  development: {
    databases: {
      CumulativeDB: {
        database: process.env.RDS_DATABASE1,
        username: process.env.RDS_USERNAME1,
        password: process.env.RDS_PASSWORD1,
        host: process.env.RDS_HOSTNAME1,
        port: process.env.RDS_PORT1,
        dialect: "postgres",
      },
      DailyDB: {
        database: process.env.RDS_DATABASE2,
        username: process.env.RDS_USERNAME2,
        password: process.env.RDS_PASSWORD2,
        host: process.env.RDS_HOSTNAME2,
        port: process.env.RDS_PORT2,
        dialect: "postgres",
      },
      NationalDB: {
        database: process.env.RDS_DATABASE3,
        username: process.env.RDS_USERNAME3,
        password: process.env.RDS_PASSWORD3,
        host: process.env.RDS_HOSTNAME3,
        port: process.env.RDS_PORT3,
        dialect: "postgres",
      },
    },
  },
  test: {
    CumulativeDB: {
      database: process.env.RDS_DATABASE1,
      username: process.env.RDS_USERNAME1,
      password: process.env.RDS_PASSWORD1,
      host: process.env.RDS_HOSTNAME1,
      port: process.env.RDS_PORT1,
      dialect: "postgres",
    },
    DailyDB: {
      database: process.env.RDS_DATABASE2,
      username: process.env.RDS_USERNAME2,
      password: process.env.RDS_PASSWORD2,
      host: process.env.RDS_HOSTNAME2,
      port: process.env.RDS_PORT2,
      dialect: "postgres",
    },
    NationalDB: {
      database: process.env.RDS_DATABASE3,
      username: process.env.RDS_USERNAME3,
      password: process.env.RDS_PASSWORD3,
      host: process.env.RDS_HOSTNAME3,
      port: process.env.RDS_PORT3,
      dialect: "postgres",
    },
  },
  production: {
    CumulativeDB: {
      use_env_variable: "Cumulative_JAWSDB_URL",
      dialect: "postgres",
    },
    DailyDB: {
      use_env_variable: "Daily_JAWSDB_URL",
      dialect: "postgres",
    },
    NationalDB: {
      use_env_variable: "National_JAWSDB_URL",
      dialect: "postgres",
    },
  },
};
