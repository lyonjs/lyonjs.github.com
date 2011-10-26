
## lyonjs.org

Source of the [lyonjs.org](http://lyonjs.org) website.


### Compiling Less

After modifying the `.less` files in /lib/, you'll need to recompile them in order to regenerate the bootstrap.css file.

Install the less command line compiler with npm by running the following command:

    $ npm install less


then run:

    lessc ./bs/less/bootstrap.less --compress > ./css/style.css

