let $x := (1 to 10)[. mod 2 = 0]
return subsequence((0, $x), 3, count($x) div 2)
