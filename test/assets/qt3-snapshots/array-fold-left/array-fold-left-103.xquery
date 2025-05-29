array:fold-left(["the cat", "sat", "on the mat"], "", function ($z, $a) {
    concat($z, " ", $a)
  })
