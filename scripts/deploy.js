
var exec = require('child_process').exec;

// Grunt tasks
task.registerBasicTask('deploy', 'Simple deploy script, prepares the gh-pages branch for push', function(data, name) {
  log.writeln('Preparing the branch ', name);

  var cb = this.async(),
    msg = 'build: generates site content (:date)'.replace(':date', new Date);

  // then, generate site's content
  // first, let's start a new build
  task.helper('bilbo', data, function(err) {
    if(err) return fail.warn(err, 3);

    // then, switch to appropriate branch. add the necessary files, forcing the
    // add of out/ (.gitignore'd) while cleaning out non tracked files (but
    // make sure to keep node_modules there). Finally, move any files under
    // out/* to the repo's root and commit.
    var cmds = [
      'git checkout ' + name,
      'git add out/ .gitignore CNAME favicon.ico -f',
      'git clean -fdx -e node_modules',
      'git mv out/* .',
      'git commit -m "' + msg + '"'
    ].join(' && ');

    exec(cmds, function(err, stdout) {
      if(err) return fail.warn(err, 3);
      log.writeln(stdout);
      cb();
    });
  });

});
