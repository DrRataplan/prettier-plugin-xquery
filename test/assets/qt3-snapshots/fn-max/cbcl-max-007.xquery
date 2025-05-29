declare function local:f ($x as xs:integer) {
  if ($x = 2) then
    xs:dayTimeDuration("P1D")
  else
    xs:dayTimeDuration("PT3S")
};

max(
  for $x in (1, 2, 3)
  return local:f($x)
)
