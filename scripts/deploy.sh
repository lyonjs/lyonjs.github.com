
# simple deploy script

# first, let's start our gh-pages branch, with no ancestor
git symbolic-ref HEAD refs/heads/gh-pages
rm .git/index

# then, install needed deps and generate site's content
npm i && npm run-script wikify --baseurl "/"

# add the out dir before cleaning
git add out/ .gitignore -f

# then, move generated files to root
git mv out/* .

# clean up non-tracked files
git clean -fdx

# commit our new build
git commit -m "build: $(date +%F)"

# finally, push to remote
git push origin gh-pages

