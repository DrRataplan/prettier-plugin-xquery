let $ordDoc := (/)
return (
    count((1, 2, 3)),
    count($ordDoc//item),
    count(distinct-values($ordDoc//item/@num)),
    count((1, 2, 3, ())),
    count(())
  )
