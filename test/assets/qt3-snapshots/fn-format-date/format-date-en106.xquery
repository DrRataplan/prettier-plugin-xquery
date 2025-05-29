for $i in 1 to 12
return let $d2 := $d + xs:yearMonthDuration("P1M") * $i
  return format-date($d2, "[MNn,3-3]", "en", (), ())
