declare function local:f ($x) {
  if ($x) then
    true()
  else (
  )
};

for $x in local:f(true()), $y in 1 to 10
return ($x, $y)
