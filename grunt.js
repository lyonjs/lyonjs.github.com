config.init({

  defaults: {
    server: false,
    port: 3001,
    source: './lyonjs.github.com.wiki/',
    dest: './dest',
    layout: './index.html',
    ext: ['md', 'markdown', 'mkd'],
    baseurl: '/dest',
    verbose: true,

    // template is either default or bootstrap
    // Or, it might be a relative path from cwd.
    // template value is known to be a path if it has some `/` in it.
    template: './layouts'
  },

  generate: {
    site: '<config:defaults>'
  },

  watch: {
    files: '**/*.md',
    tasks: 'generate:site',

    reload: {
      files: '<config:watch.files>',
      tasks: 'generate:site emit:reload'
    }
  },

  build: '<config:defaults>',

  serve: {
    output: {
      port: 3001,
      logs: 'default',
      dirs: true,
      path: './'
    }
  },

  emit: {
    reload: {
      config: 'socket',
      event: 'changed'
    }
  }

});


// for now, it's just and build is a noop
task.registerTask('default', 'generate build');
task.registerTask('reload', 'generate build serve watch:reload');

