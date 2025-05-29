let $d1 := xs:yearMonthDuration("P20Y")
return let $d2 := xs:yearMonthDuration("P10M")
  return let $seq1 := ($d1, $d2)
    return fn:sum(
        $seq1[. lt xs:yearMonthDuration("P3M")],
        xs:yearMonthDuration("P0M")
      )
