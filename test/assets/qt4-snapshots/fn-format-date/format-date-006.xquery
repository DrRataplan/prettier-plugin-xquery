string-join(
  for $i in 1 to 100
  return format-date($t + xs:yearMonthDuration("P17Y") * $i, "[Yi,4-4]"),
  " "
)
