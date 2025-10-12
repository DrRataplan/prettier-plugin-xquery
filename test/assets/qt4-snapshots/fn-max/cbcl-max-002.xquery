declare function local:f ($x as xs:integer) {
  if ($x = 2) then
    true()
  else
    false()
};

max(
  for $x in (1, 2, 3)
  return local:f($x)
)
