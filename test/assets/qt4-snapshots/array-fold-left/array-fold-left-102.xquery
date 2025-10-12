array:fold-left(
  [[2, 3], [], [4, 5, 6, 7], [6, 7], [3]],
  0,
  function ($z, $a) { $z + array:size($a) }
)
