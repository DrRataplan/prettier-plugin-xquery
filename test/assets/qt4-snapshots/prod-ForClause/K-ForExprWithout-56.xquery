count(
  for $i in (1, 2, timezone-from-time(current-time()))
  return ($i, $i)
) eq
  6 or
  count(
    for $i in (1, 2, timezone-from-time(current-time()))
    return ($i, $i)
  ) eq
    4
