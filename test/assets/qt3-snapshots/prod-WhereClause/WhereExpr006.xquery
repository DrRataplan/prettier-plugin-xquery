for $folder in /MyComputer/Drive4//Folder
return <Folder>{
    $folder/@name
  }{
    for $file in /MyComputer/Drive4//File
    where $file/@idref = $folder/@id
    return <File>{
        $file/@name
      }</File>
  }</Folder>
