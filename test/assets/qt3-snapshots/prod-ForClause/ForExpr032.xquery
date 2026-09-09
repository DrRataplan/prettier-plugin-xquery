declare variable $j external := 1;

for $x at $i in (2, 3)
where $i = $j
return $x
