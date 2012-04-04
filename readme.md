lyonjs.org
----------

Source of the [lyonjs.org](http://lyonjs.org) website.

## Install

*Following assumes you have git, node and npm installed and available in your
*$PATH. Was tested and developped for node 0.6.x, recommended version < 0.6.6.

    # clone the repo, wherever you like
    git clone git://github.com/lyonjs/lyonjs.github.com.git
    cd lyonjs.github.com

    # the default branch is gh-pages instead of master
    # actually change to master and create the branch on first clone
    git checkout -b master origin/master

    # Install all the deps
    npm install

The npm install will also trigger a git clone of the project wiki into `lyonjs.github.com.wiki/`.

```js
"scripts": {
  "install": "git clone git://github.com/lyonjs/lyonjs.github.com.wiki.git"
}
```

## Description

The site's content is generated against the [project's wiki](https://github.com/lyonjs/lyonjs.github.com/wiki). The `package.json` defines two script with the correct configuration to generate into the `out/` folder, and performs the necessary changes to prepares the gh-pages branch and move files accordingly.

* `out/`: generation destination dir
* `lyonjs.github.com.wiki/`: the repo's that is .gitignored and cloned / pull whenever the generate task is run.
* `layouts/`: includes the page template used during the generation process, and assets to copy into `out/`.

## Usage

The package.json defines a couple of npm-script you may use through the `npm run-script <script>` command.

```js
"scripts": {
  "install": "git clone git://github.com/lyonjs/lyonjs.github.com.wiki.git"
  "generate": "node node_modules/h5bp-docs/bin/generate --src lyonjs.github.com.wiki/ --dest out/ --template layout/template.html",
  "serve": "cd out/ && serve"
}
```

* `install`: That script is called when `npm install` is done and will:
  * clone the wiki repository in lyonjs.github.com.wiki/

So, to update (or init) the remote wiki repo and generate a new build,
you'll need to do these few steps:

    cd lyonjs.github.com.wiki/
    git pull origin master
    cd ..
    npm run-script docs

To preview the generated output, simply cd into `out/` and start a local
http server like so:

  npm run-script serve

**note: you'll need [serve](https://github.com/visionmedia/serve) installed
globally, run `npm install serve -g` if that's not the case**

## Deploy

Once the site is generated and you're happy with the results, run the following commands.

    git symbolic-ref HEAD refs/heads/gh-pages
    rm .git/index
    npm run-script generate
    # or npm run-script generate
    git add out/ .gitignore CNAME favicon.ico -f
    git clean -fdx -e node_modules
    git mv out/* .
    git commit -m "the commit msg"

For the lazy one out there, you may want to run `./deploy`

And then push to origin upstream to reflect changes on the live sites,
you'll need necessary github permissions to be able to do so.

## How to contribute

Head over to the [project's
wiki](https://github.com/lyonjs/lyonjs.github.com/wiki), and use the github web
interface do edit pages.

Then, you'll have to yell at one of the lyonjs member to update the live site:

* [@temsa](https://twitter.com/temsa)
* [@louis_remi](https://twitter.com/louis_remi)
* [@filirom1](https://twitter.com/filirom1)
* [@mklabs](https://twitter.com/mklabs)

We'll regenerate and push to upstream the new site's content to reflect your
changes asap.

As of now, the live site is hosted on github. Ideally, we'll move to custom
server and may automate the process a bit further (like generating the site on a
regular basis via a cron job).


