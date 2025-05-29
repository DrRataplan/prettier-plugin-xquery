for $i in -100000 to 100000
let $m := map {$i: 1}
where not(map:contains($m, $i)) or not(map:contains($m, $i cast as xs:decimal))
return error((), "i=" || $i)
