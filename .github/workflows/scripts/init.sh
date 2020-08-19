#!/bin/bash
FIRST_COMMIT_SHA="$(git rev-list --max-parents=0 HEAD)"
if [ "$FIRST_COMMIT_SHA" == "$GITHUB_SHA" ]
then
  # Install kaskadi-cli
  npm i kaskadi-cli
  # Init
  ./node_modules/.bin/kaskadi init action
  npm rm kaskadi-cli
  # Delete last line of .gitignore to stop ignoring node_modules
  dd if=/dev/null of=.gitignore bs=1 seek=$(echo $(stat --format=%s .gitignore ) - $( tail -n2 .gitignore | wc -c) | bc )
  # Commit files
  if [ "$GITHUB_ACTOR" == "alexlemaire" ]
  then
    USERNAME="Alexis Lemaire"
    EMAIL="a.lemaire@klimapartner.de"
  elif [ "$GITHUB_ACTOR" == "Holger-Will" ]
  then
    USERNAME="Holger Will"
    EMAIL="h.will@klimapartner.de"
  fi
  git config --global user.name "$USERNAME"
  git config --global user.email "$EMAIL"
  git rm .github/workflows/init.yml
  git rm .github/workflows/scripts/init.sh
  git commit -am "Initialized repository with correct naming"
  git push
else
  echo "Pushed commit is not initial commit, not proceeding to initialize repository."
fi
