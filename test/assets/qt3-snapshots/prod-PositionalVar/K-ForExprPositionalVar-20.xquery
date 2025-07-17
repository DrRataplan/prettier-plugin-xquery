deep-equal(
  (1, 2, 3),
  for $i at $p in remove((1, 2, current-time()), 0)
  return $p
)
