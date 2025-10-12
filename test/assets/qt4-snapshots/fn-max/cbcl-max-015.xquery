declare function local:f ($x as xs:integer) {
  if ($x = 2) then
    xs:yearMonthDuration("P13M")
  else
    xs:yearMonthDuration("P1Y")
};

max(
  for $x in (1, 2, 3)
  return local:f($x)
)
