#!/usr/bin/env bash

sudo bundle exec jekyll build
git add .
git commit -am "new version"
git push origin master && git push origin master --tags

npm run publish-dist

npm publish
