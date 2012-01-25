
var fs = require('fs'),
  path = require('path'),
  exec = require('child_process').exec,
  ini = require('ini');

// Grunt tasks

task.registerBasicTask('update', 'Init the wiki repo, update if needed', function(data, name) {
  // guess the remote origin wiki url
  var origin = task.helper('remote-wiki', name),
    dir = path.basename(origin).replace(/\.git$/, ''),
    cb = this.async();

  log.writeln('clone the wiki repo, if already there, pull instead');

  var cmd = (path.existsSync(dir) ? 'git pull ' : 'git clone ') + origin;

  log.writeln('executing: ' + cmd);

  // clone the wiki repo, if already there, pull instead
  exec(cmd, function(err, stdout) {
    if(err) return fail.warn(err, 3);

    log.writeln(stdout);
    cb();
  });


});

// Grunt helpers
task.registerHelper('remote-url', function(remote, cwd) {
  cwd = cwd || path.resolve();
  if(!path.existsSync('.git/config')) return fail.warn(new Error(cwd + ' does not appear to be a valid git repository.', 3));

  var config = ini.parse(fs.readFileSync('.git/config', 'utf8')),
    origin = config['remote "' + remote + '"'];

  return origin.url;
});



task.registerHelper('remote-wiki', function(remote, cwd) {
  remote = remote || 'origin';
  cwd = cwd || path.resolve();
  return task.helper('remote-url', remote).replace(/\.git$/, '.wiki.git');
});
