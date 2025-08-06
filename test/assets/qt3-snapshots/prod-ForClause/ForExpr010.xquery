for $folder in //Folder
for $file in $folder//File
return <File folder="{ $folder/FolderName }">
  { string($file/FileName[1]) }
</File>
