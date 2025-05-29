for $f in
  /MyComputer/Drive1/Folder[@creator = "Mani"]/File[@creation_date = "08/06/00"]
return <file>{
      $f/../@creator
    }{
      $f/@creation_date
    }</file>
