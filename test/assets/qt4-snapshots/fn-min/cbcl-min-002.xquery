declare function local:f ($x as xs:integer) {
  if ($x = 2) then
    false()
  else
    true()
};

min(
  for $x in (1, 2, 3)
  return local:f($x)
)
