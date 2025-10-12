for $file in (//Folder)[1]/File
where (. instance of element(File))
return $file/FileName
