for $a in (-1 div 0e0 cast as xs:float, 0, 1 div 0e0 cast as xs:float)
for $b in (-1 div 0e0 cast as xs:float, 0, 1 div 0e0 cast as xs:float)
return compare($a, $b)
