(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsLetterlikeSymbols}?)$")
) and
  (
    every
      $s in
      tokenize("⅐", ",") satisfies
      not(matches($s, "^(?:\p{IsLetterlikeSymbols}?)$"))
  )
