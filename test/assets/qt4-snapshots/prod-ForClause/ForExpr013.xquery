for $fileName in //File/FileName,
  $folderName in //Folder[contains(description, "fren")]/FolderName
return ($folderName, $fileName)
