subsequence(
  for $x in 1 to 10
  return 1 to $x,
  count(
    for $x in 0 to 10
    return 1 to $x
  ),
  1
)
