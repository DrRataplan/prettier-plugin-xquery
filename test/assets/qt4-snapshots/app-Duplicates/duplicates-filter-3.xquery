let $seq := (1 to 10, reverse(10 to 20), tail(20 to 30), 31)
for $item in distinct-values($seq)
where count($seq[. = $item]) - 1
return $item
