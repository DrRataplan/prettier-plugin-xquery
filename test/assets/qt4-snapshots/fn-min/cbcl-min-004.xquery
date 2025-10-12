declare function local:f ($x as xs:integer) {
  if ($x < 3) then
    current-date()
  else
    current-time()
};

min(
  for $x in (1, 2, 3)
  return local:f($x)
)
