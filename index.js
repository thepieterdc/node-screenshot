var platform = process.platform;
var screenshot = "";
if(platform == 'linux') {
  screenshot = require('./lib/screenshot-linux.js');
} else {
  console.error('Not yet tested on '+platform+', if you are a dev please fork and help out on this project.');
}
module.exports = screenshot;
