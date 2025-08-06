string-join(
  for $i in 0 to 30
  return let $d2 := $d + xs:yearMonthDuration("P1Y") * $i
    return translate(
      replace(format-date($d2, "[Ywo]", "en", (), ()), " and ", " "),
      "- ",
      ""
    ),
  "; "
)
