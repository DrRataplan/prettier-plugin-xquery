(
  every
    $s in
    tokenize("가힣", ",") satisfies
    matches($s, "^(?:\p{IsHangulSyllables}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsHangulSyllables}+)$"))
  )
