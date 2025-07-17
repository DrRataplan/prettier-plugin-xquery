deep-equal(
  (1, 2),
  for $i at $p in subsequence((1, 2, 3, current-time()), 2, 2)
  return $p
)
