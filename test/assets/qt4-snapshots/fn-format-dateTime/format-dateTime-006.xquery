string-join(
  for $i in 1 to 100
  return format-dateTime($t + xs:yearMonthDuration("P17Y") * $i, "[Yi,3-3]"),
  "; "
)
