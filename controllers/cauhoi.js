const { errorHandler } = require("../utils");

exports.cauhoi = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/hoi.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"gia Khánhh","data":`${link}`});
};