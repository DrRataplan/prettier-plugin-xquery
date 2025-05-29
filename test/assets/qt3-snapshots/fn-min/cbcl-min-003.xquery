declare function local:f ($x as xs:integer) {
  if ($x = 3) then
    $x
  else
    false()
};

min(
  for $x in (1, 2, 3)
  return local:f($x)
)
