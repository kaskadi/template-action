#!/bin/bash
updateFile () {
  local tmpFile=$(mktemp)
  local path=$1
  local value=$2
  sed -e "s/template-action/$value/g" $path > "$tmpFile" && mv "$tmpFile" $path
}
REPO_NAME="$(node -e "const wd = process.cwd().split('/'); console.log(wd[wd.length - 1])")"
updateFile "action.yml" "$REPO_NAME"
updateFile "package.json" "$REPO_NAME"
updateFile "README.md" "$REPO_NAME"
