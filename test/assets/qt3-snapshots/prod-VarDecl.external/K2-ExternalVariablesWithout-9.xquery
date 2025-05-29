declare variable $e := current-time();

let $i := ($e, 1 to 50000, $e)
return $i[1] = $i[last()]
