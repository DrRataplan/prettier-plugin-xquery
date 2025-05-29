for $file as element(File, xs:untyped) in (//Folder)[1]/File
return $file/FileName
