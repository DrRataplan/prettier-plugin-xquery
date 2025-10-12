array:fold-right(
  [[2, 3], [], [4, 5, 6, 7], [6, 7], [3]],
  0,
  function ($a, $z) { array:size($a) + $z }
)
