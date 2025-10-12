let $x := (1 to 100)[. mod 5 eq 0], $y := $x[. mod 10 eq 0]
return $y
