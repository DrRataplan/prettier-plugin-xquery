(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsSpecials})$")
) and
  (
    every
      $s in
      tokenize("﻾,￯", ",") satisfies
      not(matches($s, "^(?:\p{IsSpecials})$"))
  )
