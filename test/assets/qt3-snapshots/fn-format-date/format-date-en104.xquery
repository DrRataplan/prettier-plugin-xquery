for $i in 1 to 12
return let $d2 := $d + xs:yearMonthDuration("P1M") * $i
  return format-date($d2, "[MN,3-3]", "en", (), ())
