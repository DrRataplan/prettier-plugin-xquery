let $ordDoc := (/)
return (
    min((2.0, 1, 3.5, 4)),
    min(("a", "b", "c")),
    min($ordDoc//item//string(@color)),
    min($ordDoc//item/@color/string(.))
  )
