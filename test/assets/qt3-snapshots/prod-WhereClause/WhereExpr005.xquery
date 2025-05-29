<empty> {
    for $folder in /MyComputer/Drive2//Folder
    where 1 = 2
    return <Folder> {
          $folder/FolderName/text()
        } </Folder>
  } </empty>
