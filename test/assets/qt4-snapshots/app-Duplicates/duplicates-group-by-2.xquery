let $seq := (1 to 1000, 1, 1)
for $h in $seq
let $k := $h
group by $k
where count($h) > 1
return $k
