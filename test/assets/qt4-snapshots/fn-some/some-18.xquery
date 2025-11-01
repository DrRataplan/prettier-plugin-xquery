some(
  (1, 2, 3),
  function ($x) { some((4, 5, 6), function ($y) { $x + $y = 5 }) }
)
