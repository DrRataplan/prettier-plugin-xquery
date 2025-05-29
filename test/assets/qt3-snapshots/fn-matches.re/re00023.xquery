(
  every $s in tokenize("abab,", ",") satisfies matches($s, "^(?:((ab){2})?)$")
) and
  (
    every
      $s in
      tokenize("a,ab,ababa,abababab", ",") satisfies
      not(matches($s, "^(?:((ab){2})?)$"))
  )
