var spawn = require('child_process').spawn;

function screenshot(saveFile) {
  this.desktop = function(callback) {
    var arguments = ['-silent','-window','root',saveFile];
    var proc = spawn('import', arguments),
        probeData = [],
        errData = [],
        exitCode = null,
        start = Date.now();

    proc.stdout.setEncoding('utf8');
    proc.stderr.setEncoding('utf8');

    proc.stdout.on('data', function(data) { probeData.push(data); });
    proc.stderr.on('data', function(data) { errData.push(data); });
    proc.on('exit', function(code) { exitCode = code; });
    proc.on('error', function(err) { callback(err); });
    proc.on('close', function() { callback(probeData); });
  };

  this.area = function(callback) {
    var arguments = ['-silent',saveFile];
    var proc = spawn('import', arguments),
        probeData = [],
        errData = [],
        exitCode = null,
        start = Date.now();

    proc.stdout.setEncoding('utf8');
    proc.stderr.setEncoding('utf8');

    proc.stdout.on('data', function(data) { probeData.push(data); });
    proc.stderr.on('data', function(data) { errData.push(data); });
    proc.on('exit', function(code) { exitCode = code; });
    proc.on('error', function(err) { callback(err); });
    proc.on('close', function() { callback(probeData); });
  }

  return this;
}

module.exports = screenshot;
