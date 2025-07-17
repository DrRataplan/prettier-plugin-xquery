let $c1 := fn:collection()
let $c2 := fn:collection()
for $c at $p in $c1
return $c is exactly-one($c2[$p])
