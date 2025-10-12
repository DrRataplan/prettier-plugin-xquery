for $file in (//Folder)[1]/File
return xs:string(data($file/FileName[1]))
