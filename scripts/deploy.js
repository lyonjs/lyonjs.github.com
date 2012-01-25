
var exec = require('child_process').exec;

// Grunt tasks
task.registerBasicTask('deploy', 'Simple deploy script, prepares the gh-pages branch for push', function(data, name) {
  log.writeln('Preparing the branch ', name);

  var cb = this.async(),
    msg = 'build: generates site content (:date)'.replace(':date', new Date);

  // first, let's start our gh-pages branch, with no ancestor
  exec('git symbolic-ref HEAD refs/heads/' + name, function(err, stdout, stderr) {
    if(err) return fail.warn(err, 3);

    log.writeln(stdout);

    // then, generate site's content
    task.helper('bilbo', data, function(err) {
      if(err) return fail.warn(err, 3);

      // then, add the necessary files, forcing the add of out/
      // (.gitignore'd) while cleaning out non tracked files
      // (but make sure to keep node_modules there). Finally,
      // move any files under out/* to the repo's root and commit.
      var cmds = [
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

});
