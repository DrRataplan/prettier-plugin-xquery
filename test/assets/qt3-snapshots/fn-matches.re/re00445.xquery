(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsKangxiRadicals})$")
) and
  (
    every
      $s in
      tokenize("⻿", ",") satisfies
      not(matches($s, "^(?:\p{IsKangxiRadicals})$"))
  )
