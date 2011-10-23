
### Compiling Less

After modifying the `.less` files in /lib/, you'll need to recompile them in order to regenerate the bootstrap.css file.

Install the less command line compiler with npm by running the following command:

    $ npm install less


then run the following command:

    lessc ./bs/less/bootstrap.less --compress > bootstrap.css

