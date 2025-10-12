count(
  for $i in (1, 2, current-time())
  return ($i, $i)
) eq
  6
