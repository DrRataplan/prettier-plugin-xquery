for $i in -100000 to 100000
let $d := xs:double($i)
let $m := map {$d: 1}
where not(map:contains($m, $d)) or not(map:contains($m, $d cast as xs:decimal))
return error((), "i=" || $i)
