for $file in (//Folder)[1]/File
where data($file/SecurityObject//right)
return $file/FileName
