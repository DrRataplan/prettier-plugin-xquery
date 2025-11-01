every(
  (1, 2, 3),
  function ($x) { every((4, 5, 6), function ($y) { $x + $y = 5 }) }
)
