let $d1 := xs:yearMonthDuration("P20Y")

return let $d2 := xs:yearMonthDuration("P10M")

  return fn:sum(($d1, $d2), "ein Augenblick")
