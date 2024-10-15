const { errorHandler } = require("../utils");

exports.canhgame = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/canhgame.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
res.json({"Authors":"hoangphuong","data":`${link}`});
};