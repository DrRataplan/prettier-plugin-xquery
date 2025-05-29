(every $s in tokenize("ǅ", ",") satisfies matches($s, "^(?:\P{M}*)$")) and
  (
    every
      $s in
      tokenize("ً𝆭ः𝅲ः𝅲⃝⃝⃠", ",") satisfies
      not(matches($s, "^(?:\P{M}*)$"))
  )
