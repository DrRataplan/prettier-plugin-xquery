for $x in (xs:integer("123"), xs:integer("234"))
for $y in (xs:integer("123"), xs:integer("456"))
where $x = $y
return $x
