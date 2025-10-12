(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCJKUnifiedIdeographsExtensionA}?)$")
) and
  (
    every
      $s in
      tokenize("一", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKUnifiedIdeographsExtensionA}?)$"))
  )
