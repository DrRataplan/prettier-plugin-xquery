string-join(
  for $i in 0 to 30
  return let $d2 := $d + xs:yearMonthDuration("P1Y") * $i
    return replace(format-date($d2, "[Yw]", "en", (), ()), " and ", " "),
  "; "
)
