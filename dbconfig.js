const dbconfigs = {
  development: {
    host: "basic-app-db",
    port: "3306",
    user: "root",
    password: "",
    database: "INFORMATION_SCHEMA",
  },
  staging: {
    host: "",
    port: "",
    user: "",
    password: "",
    database: "",
  },
  production: {
    host: "db.local",
    port: "3306",
    user: "root",
    password: "",
    database: "INFORMATION_SCHEMA",
  },
};

module.exports = dbconfigs;
