declare function local:f ($x as xs:integer) {
  if ($x = 2) then
    xs:dateTime("3000-12-01T12:00:00")
  else
    current-dateTime()
};

max(
  for $x in (1, 2, 3)
  return local:f($x)
)
