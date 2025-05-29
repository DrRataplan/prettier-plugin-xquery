fn:for-each-pair(
  (//node(), 1, "string", 3.14, 2.7e0, fn:exists#1),
  (//node(), 1, "string", 3.14, 2.7e0, fn:exists#1),
  function ($a, $b) {
    if ($a instance of function(*)) then
      $b instance of function(*)
    else if ($b instance of function(*)) then
      false()
    else
      deep-equal($a, $b)
  }
)
