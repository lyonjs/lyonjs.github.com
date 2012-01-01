
# simple deploy script

# first, let's start our gh-pages branch, with no ancestor
git symbolic-ref HEAD refs/heads/gh-pages
rm .git/index

# then, install needed deps and generate site's content
npm i && npm run-script wikify --baseurl "/"

# add the out dir before cleaning
git add out/ .gitignore CNAME readme.md favicon.ico -f

# clean up non-tracked files
git clean -fdx

# then, move generated files to root
git mv out/* .

# commit our new build
git commit -m "build: $(date +%F)"

# finally, push to remote
git push origin gh-pages

