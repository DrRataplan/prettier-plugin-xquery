declare variable $j external;

for $x at $i in (2, 3)
where $i = $j
return $x
