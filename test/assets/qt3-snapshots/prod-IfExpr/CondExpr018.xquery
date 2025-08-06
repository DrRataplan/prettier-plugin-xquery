for $file in (//Folder)[1]/File
return if ($file/FileName = "File00000000004") then
  1
else
  data($file/FileName)
