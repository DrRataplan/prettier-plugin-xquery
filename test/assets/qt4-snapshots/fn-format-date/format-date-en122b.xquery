for $i in 0 to 30
return let $d2 := $d + xs:yearMonthDuration("P1Y") * $i
  return format-date($d2, "[Y0001o]", "en", (), ())
