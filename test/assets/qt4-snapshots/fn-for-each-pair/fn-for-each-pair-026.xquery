fn:for-each-pair(
  (true(), false(), true()),
  1 to 3,
  function ($arg1, $arg2) {
    if ($arg1) then
      $arg2
    else (
    )
  }
)
