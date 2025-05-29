(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCJKSymbolsandPunctuation}?)$")
) and
  (
    every
      $s in
      tokenize("぀", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKSymbolsandPunctuation}?)$"))
  )
