let $a := [xs:float("NaN"), 1], $b := [xs:float("NaN"), 2]
return sort-by(($a, $b, $a, $b), ())
