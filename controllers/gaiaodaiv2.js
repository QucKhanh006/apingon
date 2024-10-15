const { errorHandler } = require("../utils");

exports.gaiaodaiv2 = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/gaiaodai.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
res.json({"Authors":"hoangphuong","url":`${link}`});
};