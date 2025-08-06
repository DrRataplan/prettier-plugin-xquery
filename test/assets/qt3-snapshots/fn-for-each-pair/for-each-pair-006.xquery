let $millenium := year-from-date(current-date()) idiv 1000
return for-each-pair(
  1 to 5,
  2 to 6,
  function ($a as xs:integer, $b as xs:integer) as xs:integer {
    $a + $b + $millenium
  }
)
