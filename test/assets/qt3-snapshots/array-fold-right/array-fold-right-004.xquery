array:fold-right(["+2", "*3"], "10", function ($a, $z) {
    concat("(", $z, $a, ")")
  })
