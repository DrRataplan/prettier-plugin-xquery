declare function local:sequence ($arg as xs:integer) as item()* {
  if ($arg mod 2 eq 0) then (
    1, 3, 5, 7, 9
  ) else (
    "a", "b", "c"
  )
};

for $x in local:sequence(2)
for $y in local:sequence(3)
where $x = $y
return ($x, $y)
