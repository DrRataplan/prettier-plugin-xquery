let $a := [xs:float("NaN"), 1], $b := [xs:float("NaN"), 2]
return array:sort([$a, $b, $a, $b])
