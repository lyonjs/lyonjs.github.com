// 
// Configuration file for the wiki build.
//
// This is meant to be run using `npm run-script wikify` and uses
// [h5bp-docs](https://github.com/mklabs/h5bp-docs)

exports = module.exports = {
  // --server, when set to true, will start a connect static server once generation is done
  server: false,

  // src folder, this is where the markdown files are
  src: "./lyonjs.github.com.wiki/",

  // destination folder, place where the generated files will land
  dest: "./out/",

  // a single layout files with a {{ content }} placeholder.
  layout: "./layouts/page.html",

  // assets folder
  // - putting a false value will prevent the assets copy.
  // - ommiting assets assets copy the public folder in h5bp-docs package.
  assets: './assets/',

  // allowed extensions, all other files are ignored 
  ext: ['md', 'markdown', 'mkd'],

  // baseurl, only used with --server flag. ex: docs
  baseurl: '/out/',

  // Enable verbose output (defaults true)
  verbose: true
};
