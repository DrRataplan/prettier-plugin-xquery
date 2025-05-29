(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsIdeographicDescriptionCharacters})$")
) and
  (
    every
      $s in
      tokenize("⿟", ",") satisfies
      not(matches($s, "^(?:\p{IsIdeographicDescriptionCharacters})$"))
  )
