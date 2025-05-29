(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCJKUnifiedIdeographs}?)$")
) and
  (
    every
      $s in
      tokenize("ꀀ", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKUnifiedIdeographs}?)$"))
  )
