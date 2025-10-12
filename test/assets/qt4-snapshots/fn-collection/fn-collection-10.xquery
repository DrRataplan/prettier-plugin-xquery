let $c1 := fn:collection($collection-uri)
let $c2 := fn:collection($collection-uri)
for $c at $p in $c1
return $c is exactly-one($c2[$p])
