for $i in 1 to 7
return let $d2 := $d + xs:dayTimeDuration("P1D") * $i
  return format-date($d2, "[Fn,2-2]", "de", (), ())
