declare function local:f ($x) {
  if ($x) then
    true()
  else (
  )
};

empty(
  for $x in local:f(false()), $y in 1 to 10
  return ($x, $y)
)
