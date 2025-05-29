let $doc := (/)
return (11 to 15)!(
    for $file in $doc//File
    count$c
    where $c = position()
    return $file/FileName
  )
