fn:for-each-pair(
  ("1", "2"),
  (1, 2),
  function ($arg1 as xs:integer, $arg2 as xs:integer) {
    $arg1 + $arg2
  }
)
