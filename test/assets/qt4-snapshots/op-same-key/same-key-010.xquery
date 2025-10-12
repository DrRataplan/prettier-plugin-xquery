for $i in -100000 to 100000
let $f := xs:float($i)
let $m := map {$f: 1}
where not(map:contains($m, $f)) or not(map:contains($m, $f cast as xs:decimal))
return error((), "i=" || $i)
