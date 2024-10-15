const { errorHandler } = require("../utils");

exports.danhngon = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/danhngon.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"gia khanh","data":`${link}`});
};