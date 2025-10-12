(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsBoxDrawing})$")
) and
  (
    every
      $s in
      tokenize("⓿", ",") satisfies
      not(matches($s, "^(?:\p{IsBoxDrawing})$"))
  )
