for $file in (//Folder)[1]/File
return <File>{
    $file/@name
  }{
    attribute offset {
      $offset
    }
  }</File>
