for $folder in //Folder
return for $file in $folder/File
  return string($file/FileName[1])
