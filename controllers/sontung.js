const { errorHandler } = require("../utils");

exports.sontung = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/sontung.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
res.json({"Authors":"quoc khanh","data":`${link}`});
};
