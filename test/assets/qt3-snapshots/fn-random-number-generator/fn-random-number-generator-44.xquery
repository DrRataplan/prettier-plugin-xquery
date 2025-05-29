fold-left(1 to 10, random-number-generator(), function ($z, $i) {
    head($z)("next")(), tail($z), head($z)("number")
  }) => tail()
