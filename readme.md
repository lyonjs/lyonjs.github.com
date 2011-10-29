
## lyonjs.org

Source of the [lyonjs.org](http://lyonjs.org) website.


### Compiling Less

After modifying the `.less` files in /lib/, you'll need to recompile them in order to regenerate the bootstrap.css file.

Install the less command line compiler with npm by running the following command:

    $ npm install less


then run:

    lessc ./bs/less/bootstrap.less --compress > ./css/style.css


### Running the build script

From the root of the repo, just run:

    h5bp-cake -l silly build

Type `h5bp-cake` to print the list of available tasks, Type `h5bp-cake -h <topic> help` to get help on a command, type `h5bp-cake help` if you're starting at it.

You can edit the local configuration by tweaking the `.h5bprc` file.

Build script output defaults to `publish/` dir.
