fn:filter(
  (),
  function ($a as item()) as xs:boolean* { fn:boolean($a), fn:boolean($a) }
)
