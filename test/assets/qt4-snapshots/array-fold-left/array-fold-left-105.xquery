array:fold-left(
  [function ($x) { $x + 2 }, function ($x) { $x * 3 }],
  10,
  function ($z, $a) { $a($z) }
)
