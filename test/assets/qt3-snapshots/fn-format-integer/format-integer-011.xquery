string-join(
  for $i in 1 to 4
  return format-integer($i, "A")
)
