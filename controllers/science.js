const { errorHandler } = require("../utils");

exports.science = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/science.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"gia Khánhh","url":`${link}`});
};