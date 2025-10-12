string-join(
  for $i in (1 to 23, 151, 302, 469, 2025)
  return concat($i, "=", format-integer($i, "一")),
  "|"
)
