avg(
  for $x in 1 to 9
  return xs:yearMonthDuration(concat("P", $x, "M"))
)
