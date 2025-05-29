for $folder in //Folder, $file in $folder//File
return <File folder="{
    $folder/FolderName
  }">{
    string($file/FileName[1])
  }</File>
