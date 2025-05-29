for $file in //File
where current-date() gt xs:date("1900-01-01")
let $prefix := substring($file/FileName, 1, 4)
where ($prefix = "File")
where ($file//Allow/user = "system\Hyungjeong")
return $file/FileName
