declare function local:f ($x as xs:integer) {
  if ($x = 2) then
    xs:time("12:00:00-01:00")
  else
    xs:time("12:00:00+01:00")
};

min(
  for $x in (1, 2, 3)
  return local:f($x)
)
