#!/bin/bash

# for this script to work you must intend to push branch 'master' to remote 'origin'
# change script ass necessary to use other branch or remote

# Ask the user for the commit message
echo Please enter your commit message:
read message

# stage all changes, commit all, push to remote
git add -A 
git commit -m "$message"
git branch -M master
git push -u origin master