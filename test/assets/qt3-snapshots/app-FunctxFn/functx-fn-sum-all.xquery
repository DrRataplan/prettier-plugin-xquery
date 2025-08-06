let $ordDoc := (/)
return (
  sum((1, 2, 3)),
  sum($ordDoc//item/@quantity),
  sum((xs:yearMonthDuration("P1Y2M"), xs:yearMonthDuration("P2Y3M"))),
  sum((1, 2, 3, ())),
  sum(()),
  sum((), ())
)
