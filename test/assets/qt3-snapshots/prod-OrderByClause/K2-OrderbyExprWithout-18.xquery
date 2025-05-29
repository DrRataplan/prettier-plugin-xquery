(
  for $i in current-time()
  order by $i
  return $i
) eq
  current-time()
