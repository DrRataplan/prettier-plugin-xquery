fold-right(
  (1, 2, 2, 3, 3, 3, 4, 5, 5),
  (),
  function ($a, $b) {
    if (exists($b[. eq $a])) then
      $b
    else (
      $a, $b
    )
  }
)
