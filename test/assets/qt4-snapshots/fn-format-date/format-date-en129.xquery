string-join(
  for $i in 0 to 30
  return let $d2 := $d + xs:dayTimeDuration("P1D") * $i
    return translate(format-date($d2, "[DWo]", "en", (), ()), "- ", ""),
  "; "
)
