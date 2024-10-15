const { errorHandler } = require("../utils");

exports.vdanime2 = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/vdanime.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
res.json({"Authors":"quoc khanh","url":`${link}`});
};
