let $f := function ($a, $b) { ($b, $a) }
return fold-right(1 to 5, (), $f)
