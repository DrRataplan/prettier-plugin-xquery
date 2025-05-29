for $file in //File
count$c
where ($file//Allow/user = "system\Aladin")
return $c
