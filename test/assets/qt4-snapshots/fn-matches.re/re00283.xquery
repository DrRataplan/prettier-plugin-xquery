(
  every
    $s in
    tokenize("㐀䶵", ",") satisfies
    matches($s, "^(?:\p{IsCJKUnifiedIdeographsExtensionA}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKUnifiedIdeographsExtensionA}+)$"))
  )
