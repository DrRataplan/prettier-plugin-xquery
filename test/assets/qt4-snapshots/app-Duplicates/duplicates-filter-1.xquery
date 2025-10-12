let $seq := (1 to 1000, 1, 1)
for $item in distinct-values($seq)
where count($seq[. = $item]) > 1
return $item
