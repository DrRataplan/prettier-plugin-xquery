1 eq
  (
    for $i at $p in subsequence((1, 2, 3, current-time()), 1, 1)
    return $p
  )
