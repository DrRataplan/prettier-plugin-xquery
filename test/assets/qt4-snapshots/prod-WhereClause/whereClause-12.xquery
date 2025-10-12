let $seq := (1, reverse(1 to 2))
for $item in distinct-values($seq)
where count($seq[. = $item]) > 1
return $item
