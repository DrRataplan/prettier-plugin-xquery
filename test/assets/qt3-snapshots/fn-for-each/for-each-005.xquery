for-each(
  for-each(
    ("john", "mary", "jane", "anne", "peter", "ian"),
    function ($n as xs:string) { upper-case($n) }
  ),
  function ($e as xs:string) as xs:string { lower-case($e) }
)
