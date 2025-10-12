(
  every
    $s in
    tokenize("abc?,abbbc??,abca??,abbbbca?", ",") satisfies
    matches($s, "^(?:(ab+c)a?\?\??)$")
) and
  (
    every
      $s in
      tokenize("ac??,bc??,abc,abc???", ",") satisfies
      not(matches($s, "^(?:(ab+c)a?\?\??)$"))
  )
