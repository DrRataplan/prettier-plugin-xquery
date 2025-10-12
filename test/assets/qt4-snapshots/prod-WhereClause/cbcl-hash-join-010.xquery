for $x in (1, 2, 3, xs:untypedAtomic("1"))
for $y in (1, 2, 3, "cheese")
where $x = $y
return ($x, $y)
