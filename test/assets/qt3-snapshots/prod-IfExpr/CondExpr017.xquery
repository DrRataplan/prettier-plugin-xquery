for $file in (//Folder)[1]/File
return if ($file/FileName = "File00000000000") then
  $file/FileName
else
  data($file/FileName)
