let $ordDoc := (/)
return (
  avg((1, 2, 3, 4, 5)),
  avg((1, 2, 3, (), 4, 5)),
  avg((xs:yearMonthDuration("P4M"), xs:yearMonthDuration("P6M"))),
  avg($ordDoc//item/@quantity),
  avg(())
)
