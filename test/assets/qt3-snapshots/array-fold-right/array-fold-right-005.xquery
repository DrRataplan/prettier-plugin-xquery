array:fold-right([function ($x) {
    $x + 2
  }, function ($x) {
    $x * 3
  }], 10, function ($a, $z) {
    $a($z)
  })
