deep-equal(
  (1, 2),
  for $i at $p in subsequence((1, 2, 3, current-time()), 1, 2)
  return $p
)
