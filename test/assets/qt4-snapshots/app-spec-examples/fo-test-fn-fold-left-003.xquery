fn:fold-left(
  (true(), false(), false()),
  false(),
  function ($a, $b) { $a or $b }
)
