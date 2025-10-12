count(
  for $y in 1 to 10
  group by $y := $y, $y := $y mod 2
  return $y
)
