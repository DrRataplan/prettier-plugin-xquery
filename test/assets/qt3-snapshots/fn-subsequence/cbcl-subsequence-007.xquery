subsequence(
  (
    1,
    2,
    for $x in 1 to 10
    return 2 * $x
  ),
  -1,
  sum((1 to 10)[. mod 10 = 3])
)
