declare function local:f ($x as xs:integer) {
  if ($x = 3) then
    xs:duration("P1Y")
  else
    xs:yearMonthDuration("P11M")
};

min(
  for $x in (1, 2, 3)
  return local:f($x)
)
