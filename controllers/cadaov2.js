const { errorHandler } = require("../utils");

exports.cadaov2 = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/cadao.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"gia khanh","url":`${link}`});
};