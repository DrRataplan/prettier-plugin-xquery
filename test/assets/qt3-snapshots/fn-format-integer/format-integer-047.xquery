string-join(
  for $i in 1 to 5
  return format-integer($i, "⑴"),
  "|"
)
