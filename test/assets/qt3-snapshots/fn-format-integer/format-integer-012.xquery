string-join(
  for $i in 1 to 20
  return format-integer($i, "i"),
  "|"
)
