array:fold-right(["a", "b", "c"], "", function ($a, $b) {
    concat($b, $a)
  })
