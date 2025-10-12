fold-left(
  (13, 14, 9, 6),
  (),
  function ($a, $b) {
    if (empty($a)) then
      $b
    else
      ($a + $b) div 2
  }
)
