<fragment-result>
  {
    for $folder in /MyComputer/Drive3/Folder,
      $file in /MyComputer/Drive3/Folder/File
    return <Folder>
        { $folder/@name, $folder/@id }
        <file>{ $file/@idref }{ data($file/@name) }</file>
      </Folder>
  }
</fragment-result>
