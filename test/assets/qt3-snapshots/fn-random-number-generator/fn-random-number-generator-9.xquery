let $r := fn:random-number-generator()?next()?number
return ($r lt 0 or $r ge 1)
