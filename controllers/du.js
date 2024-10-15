const { errorHandler } = require("../utils");

exports.du = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/du.json', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
res.json({"Authors":"quoc khanh","data":`${link}`});
};
