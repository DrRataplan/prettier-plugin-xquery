array:for-each-pair([function ($x) {
    $x + 2
  }, function ($x) {
    $x * 2
  }, function ($x) {
    $x * $x
  }], [3, 4, 5], function ($a, $b) {
    $a($b)
  })
