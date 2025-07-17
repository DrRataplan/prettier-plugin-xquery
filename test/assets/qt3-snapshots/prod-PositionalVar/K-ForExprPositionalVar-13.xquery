deep-equal(
  (1, 2, 3, 4),
  for $i at $p in insert-before((1, current-time()), 1, (current-date(), 3))
  return $p
)
