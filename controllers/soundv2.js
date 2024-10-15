const { errorHandler } = require("../utils");

exports.soundv2 = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/sound.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"gia Khánhh","url":`${link}`});
};