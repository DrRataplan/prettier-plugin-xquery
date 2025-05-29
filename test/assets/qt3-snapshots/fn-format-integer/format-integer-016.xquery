string-join(
  for $i in 1 to 10
  return format-integer($i, "Ww"),
  "|"
)
