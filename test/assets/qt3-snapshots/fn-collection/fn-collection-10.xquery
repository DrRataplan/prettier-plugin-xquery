let $c1 := fn:collection($collection-uri)
let $c2 := fn:collection($collection-uri)
for $c in $c1
return $c is exactly-one($c2[$p])
