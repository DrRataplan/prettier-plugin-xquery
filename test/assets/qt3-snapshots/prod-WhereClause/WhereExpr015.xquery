<empty> {
  for $file in (//Folder)[1]/File
  where false()
  return $file/FileName
} </empty>
