deep-equal(
  (1, 2, 3),
  for $i at $p in remove((1, 2, 3, current-time()), 4)
  return $p
)
