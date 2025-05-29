string-join(
  for $i in 1 to 100
  return format-date($t + xs:yearMonthDuration("P1Y") * $i, "[YI]"),
  " "
)
