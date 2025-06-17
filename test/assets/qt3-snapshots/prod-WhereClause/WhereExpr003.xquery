for $d in /MyComputer/Drive4
where $d/Folder[@id = "128"]
return <FolderName>{ $d/Folder/@name }</FolderName>
