for $i in 1 to 7
return let $d2 := $d + xs:dayTimeDuration("P1D") * $i
  return format-date($d2, "[FN,2-2]", "de", (), ())
