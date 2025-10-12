for $file in (//Folder)[1]/File
where $file/SecurityObject/Denies/Deny/security/right = "Change"
return $file/FileName
