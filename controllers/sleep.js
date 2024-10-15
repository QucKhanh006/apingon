const { errorHandler } = require("../utils");

exports.sleep = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/ngủ.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"quoc khanh","url":`${link}`});
};
