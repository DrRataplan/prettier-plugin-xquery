min(
  for $x in 1 to 10
  return xs:yearMonthDuration(concat("P", $x, "M"))
)
