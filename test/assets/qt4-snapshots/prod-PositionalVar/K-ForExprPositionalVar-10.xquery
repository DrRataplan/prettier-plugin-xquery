deep-equal(
  (1, 2, 3),
  for $i at $p in distinct-values((1, 2, 3, 1, 2))
  return $p
)
