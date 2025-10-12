declare function local:f ($x as xs:integer) {
  if ($x = 0) then
    true()
  else
    false()
};

max(
  for $x in (1, 2, 3)
  return local:f($x)
)
