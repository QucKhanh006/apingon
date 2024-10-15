const { errorHandler } = require("../utils");

exports.remix = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/remix.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
res.json({"Authors":"quoc khanh","data":`${link}`});
};
