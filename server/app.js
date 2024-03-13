// const Chanjs = require('./core/chan.js');
const Chanjs = require("chanjs");
const chan = new Chanjs();
const config = require("./app/middleware/config.js");
chan.beforeStart(async () => {
  await config(chan.app);
});
chan.run(81);
