empty(
  for $i at $p in subsequence((1, 2, 3, current-time()), 5)
  return $p
)
