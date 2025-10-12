for $file in //File
let $namelen := string-length($file/FileName)
where ($namelen = 15 and $file//Allow/user = "system\Hyungjeong")
return $file/FileName
