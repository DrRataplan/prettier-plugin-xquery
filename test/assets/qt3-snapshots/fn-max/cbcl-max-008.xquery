declare function local:f ($x as xs:integer) {
  if ($x = 3) then
    xs:duration("P1D")
  else
    xs:dayTimeDuration("PT3S")
};

max(
  for $x in (1, 2, 3)
  return local:f($x)
)
