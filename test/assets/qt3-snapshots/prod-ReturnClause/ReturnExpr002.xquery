for $folder in /MyComputer/Drive2//Folder
return <newFolder>{ $folder/@name, $folder/FolderName/text() }</newFolder>
