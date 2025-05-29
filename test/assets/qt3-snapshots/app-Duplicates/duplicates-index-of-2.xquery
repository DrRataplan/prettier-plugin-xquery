let $seq := (1 to 1000, 1, 1)
return distinct-values($seq[count(index-of($seq, .)) gt 1])
