let $r := fn:random-number-generator()?next()?number
return ($r ge 0 and $r lt 1)
