
## lyonjs.org

Source of the [lyonjs.org](http://lyonjs.org) website.

### Install

    git clone git://github.com/lyonjs/lyonjs.github.com.git
    cd lyonjs.github.com
    npm install

Or

    npm install http://github.com/lyonjs/lyonjs.github.com/tarball/master

On install, the wiki content is cloned to lyonjs.github.com.wiki and is
used to generate the site's content.

### Usage

The package.json defines a set of npm-script you may use through the `npm run-script <script>` command.

    "scripts": {
      "less": "cp ./assets/css/app.css ./assets/css/style.css && ./node_modules/.bin/lessc ./assets/less/bootstrap.less --compress >> ./assets/css/style.css",
      "serve": "./node_modules/.bin/serve",
      "wikify": "./scripts/wikify.sh",
      "deploy": "./scripts/deploy.sh"
    }

* **less**: rebuild the site's css. The `assets/css/app.css` is copied
  over `style.css` where the bootstrap's less compiled files are
  concat'd.

* **serve**: utility script to spawn a local http server.

* **wikify**: used the gollum wiki content to generate static webpages.
  Template files in `layouts/` are used during the generation process.
  Destination folder defaults to `out/` dir.

* **deploy**: This script will create an empty branch, trigger the
  wikify command while moving out/ files over to root, add / commit
  files to finally automatically push over the gh-pages remote branch.
