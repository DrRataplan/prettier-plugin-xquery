<fragment-result>{
  for $folder in /MyComputer/Drive3/Folder,
    $file in /MyComputer/Drive3/Folder/File
  where $folder/@id = $file/@idref
  return <Folder> {
      $folder/@name, $folder/@id
    } <file>{
      $file/@idref, $file/FileName/text()
    }</file> </Folder>
}</fragment-result>
