#!/bin/bash

echo This script refactors the base Dingus app.
echo It will relace all instances of the string
echo   'dingus' in the 'src' directory,
echo   both capitalized and lowercase,
echo   with whatever string you enter
echo   as a replacement.
echo Spaces and special characters are not allowed 
echo -------------

echo Please enter the new term:
read newName


targetName="dingus"

first=`echo $targetName|cut -c1|tr [a-z] [A-Z]`
second=`echo $targetName|cut -c2-`
capitalizedTargetName=$first$second

first=`echo $newName|cut -c1|tr [a-z] [A-Z]`
second=`echo $newName|cut -c2-`
capitalizedNewName=$first$second

echo Target string is: $targetName
echo New string is: $newName

find src -type f -print0 | xargs -0 sed -i  -e "s/$targetName/$newName/g"&&
find src -type f -print0 | xargs -0 sed -i  -e "s/$capitalizedTargetName/$capitalizedNewName/g"&&

find src -depth -name "*$targetName*" | \
while IFS= read -r ent; do mv $ent ${ent%$targetName*}$newName${ent##*$targetName}; done

find src -depth -name "*$capitalizedTargetName*" | \
while IFS= read -r ent; do mv $ent ${ent%$capitalizedTargetName*}$capitalizedNewName${ent##*$capitalizedTargetName}; done










