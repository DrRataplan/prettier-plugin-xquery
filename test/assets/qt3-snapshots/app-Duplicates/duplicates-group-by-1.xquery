for $h in (1 to 1000, 1, 1)
let $k := $h
group by $k
where count($h) gt 1
return $h[1]
