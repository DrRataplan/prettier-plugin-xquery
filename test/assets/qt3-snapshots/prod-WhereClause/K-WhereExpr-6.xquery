(
  for $i in 1
  where true()
  return $i
) eq
  1
