let $doc := (/)
return (11 to 15)!(
    for $file in $doc//File
    where $c = last()
    return string($file/FileName)
  )
