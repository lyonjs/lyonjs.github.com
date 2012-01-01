

## first, let's rebuild our css
npm run-script less

# then, make sur our temp dir is ok
mkdir .tmp

# first run, build from wiki using page.html layout
./node_modules/.bin/h5bp-docs --config wikify.js --layout layouts/page.html --dest .tmp/pages/  --baseurl $npm_config_baseurl

# second and last, build using index.html layout
./node_modules/.bin/h5bp-docs --config wikify.js --layout layouts/index.html --dest .tmp/index/ --baseurl $npm_config_baseurl

# merge the two (into pages, picking up just out/index/index.html)
cp .tmp/index/index.html .tmp/pages/index.html

# get the final result, copy over out/ dir
rm -rf out && cp -r .tmp/pages/ out/

# remove the temporary dir, generated files are in out/ dir
rm -rf .tmp
