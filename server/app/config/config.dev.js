const base = require("./config.base.js");

const config = { ...base };

// add mysql config
config.database = {
  // client: "mysql2", 默认mysql
  host: "154.221.19.228",
  // port: "3306",默认3306
  user: "root",
  password: "Zyl123..",
  database: "chanyue",
  // charset: "utf8mb4",
};

//sql debug
config.debug = false;
config.env = "dev";

// 日志
config.logger = {
  level: "dev",
};

module.exports = config;
