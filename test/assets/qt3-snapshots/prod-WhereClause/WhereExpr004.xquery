for $f in /MyComputer/Drive1/Folder[@creator = "Mani"]/File
where $f/@creation_date = "08/06/00"
return $f
