let $seq3 := (3, 4, 5)
return fn:avg(($seq3, xs:float("NaN")))
