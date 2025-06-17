fn:filter(
  ("1", "2", "3"),
  function ($arg as xs:integer) as xs:boolean { $arg eq 100 }
)
