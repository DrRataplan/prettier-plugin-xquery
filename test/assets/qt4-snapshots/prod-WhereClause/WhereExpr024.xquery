for $file in //File
let $prefix := substring($file/FileName, 1, 4)
where ($prefix = "File")
where ($file//Allow/user = "system\Hyungjeong")
return $file/FileName
