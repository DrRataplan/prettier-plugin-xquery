for $file in (//Folder)[1]/File
where $offset mod 2 = 1
return $file/FileName
