(
  every $s in tokenize(",#$", ",") satisfies matches($s, "^(?:[\P{L}*]{0,2})$")
) and
  (
    every
      $s in
      tokenize("!$#,A", ",") satisfies
      not(matches($s, "^(?:[\P{L}*]{0,2})$"))
  )
