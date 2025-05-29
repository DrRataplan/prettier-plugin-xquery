let $seq2 := (98.5, 98.3, 98.9)
return fn:count($seq2[. > 100])
