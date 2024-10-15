const { errorHandler } = require("../utils");

exports.randomvid = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/randomvid.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
res.json({"Authors":"hoangphuong","data":`${link}`});
};