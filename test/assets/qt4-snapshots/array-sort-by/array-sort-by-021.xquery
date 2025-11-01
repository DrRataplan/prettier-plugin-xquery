let $a := [xs:float("NaN"), 1], $b := [xs:float("NaN"), 2]
return array:sort-by([$a, $b, $a, $b], ())
