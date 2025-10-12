min(
  for $x in 1 to 10
  return xs:dayTimeDuration(concat("PT", $x, "H"))
)
