
var exec = require('child_process').exec,
  rimraf = require('rimraf');

// Grunt tasks
task.registerBasicTask('deploy', 'Simple deploy script, prepares the gh-pages branch for push', function(data, name) {
  log.writeln('Preparing the branch ', name);

  // first, let's start our gh-pages branch, with no ancestor
  exec('git symbolic-ref HEAD refs/heads/' + name, function(err, stdout, stderr) {
    if(err) return fail.warn(err, 3);
  
    // then, install needed deps and generate sit's content
  });


});
