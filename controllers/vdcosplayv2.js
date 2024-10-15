const { errorHandler } = require("../utils");

exports.vdcosplayv2 = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/vdcosplayv2.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"loveaivy","url":`${link}`});
};