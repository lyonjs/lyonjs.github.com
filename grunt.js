config.init({

  defaults: {
    // source of the wiki repository, defaults to this on bacic clone
    source: './lyonjs.github.com.wiki/**/*.md',

    // the output generation folder
    dest: './out',

    // destination files would be at the root of the live site
    baseurl: '',
    verbose: true,

    repo: 'lyonjs/lyonjs.github.com',

    // template is either default or bootstrap
    // Or, it might be a relative path from cwd.
    // template value is known to be a path if it has some `/` in it.
    template: './layouts'
  },

  generate: {
    site: '<config:defaults>'
  },

  watch: {
    files: ['<config:defaults.source>', 'layouts/public/js/*.js', 'layouts/public/css/**', 'layouts/*.html'],
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
      path: './out'
    }
  },

  emit: {
    reload: {
      config: 'socket',
      event: 'changed'
    }
  },

  update: {
    origin: 'no config, the only used config data is the task name subprop (origin)'
  },

  deploy: {
    'gh-pages': '<config:defaults>'
  }
});

// for now, it's just and build is a noop
task.registerTask('default', 'update generate build');
task.registerTask('reload', 'update generate build serve watch:reload');

