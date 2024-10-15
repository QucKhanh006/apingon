const { errorHandler } = require("../utils");

exports.capcut = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/capcut.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
res.json({"Authors":"hoangphuong","url":`${link}`});
};