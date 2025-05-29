(every $s in tokenize("_,⃝", ",") satisfies matches($s, "^(?:\P{L}*)$")) and
  (
    every
      $s in
      tokenize("aAbB,A𝞨aa𝟉ǅǅῼʰʰﾟאא𪘀", ",") satisfies
      not(matches($s, "^(?:\P{L}*)$"))
  )
