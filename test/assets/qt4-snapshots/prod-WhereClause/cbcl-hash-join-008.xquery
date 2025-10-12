declare function local:sequence ($arg as xs:integer) as item()* {
  if ($arg mod 2 eq 0) then (
    1, 3, 5, 7, 9, "cheese"
  ) else (
    xs:untypedAtomic("1"), xs:untypedAtomic("2")
  )
};

for $x in local:sequence(2)
for $y in local:sequence(3)
where $x = $y
return ($x, $y)
