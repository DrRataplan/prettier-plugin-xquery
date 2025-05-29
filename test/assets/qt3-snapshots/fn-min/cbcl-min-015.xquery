declare function local:f ($x as xs:integer) {
  if ($x = 2) then
    xs:yearMonthDuration("P11M")
  else
    xs:yearMonthDuration("P1Y")
};

min(
  for $x in (1, 2, 3)
  return local:f($x)
)
