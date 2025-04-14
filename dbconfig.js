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
    host: "basic-app-db.cbciycwoc9ui.ap-northeast-1.rds.amazonaws.com",
    port: "3306",
    user: "basicappuser", // tentative
    password: "basicapppassword", // tentative
    database: "INFORMATION_SCHEMA",
  },
};

module.exports = dbconfigs;
