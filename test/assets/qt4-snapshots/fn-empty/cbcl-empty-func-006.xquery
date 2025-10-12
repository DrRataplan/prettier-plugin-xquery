empty(
  for $x in (1 to 10)[. mod 2 = 0]
  return floor($x)
)
