for $folder in /MyComputer/Drive1/Folder[1]
return <folder1>
  { $folder/FolderName }
  <files>
    {
      for $file in ($folder/File)[position() < 6]
      return <f>{ $file/FileName/substring(., 13) }</f>
    }
  </files>
</folder1>
