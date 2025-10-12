declare function local:f ($x as xs:integer) as xs:duration {
  if ($x = 1) then
    xs:duration("P1Y")
  else
    xs:yearMonthDuration("P11M")
};

min(
  for $x in (1, 2, 3)
  return local:f($x)
)
