#!/bin/bash
# helper function to replace string in place in file
updateFile () {
  local tmpFile=$(mktemp)
  local path=$1
  local value=$2
  sed -e "s/template-action/$value/g" $path > "$tmpFile" && mv "$tmpFile" $path
}
# replace template-action by the repo name in files
REPO_NAME="$(node -e "const wd = process.cwd().split('/'); console.log(wd[wd.length - 1])")"
updateFile "action.yml" "$REPO_NAME"
updateFile "package.json" "$REPO_NAME"
updateFile "README.md" "$REPO_NAME"
# commit files
git config --global user.name 'Alexis Lemaire'
git config --global user.email 'a.lemaire@klimapartner.de'
git rm .github/workflows/init.yml
git rm .github/workflows/scripts/init.sh
git commit -am "Initial commit"
git push
