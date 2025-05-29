(
  every
    $s in
    tokenize("c?1 abc,?0
zzz", ",") satisfies
    matches($s, "^(?:\c?\?\d\s\c+)$")
) and
  (
    every
      $s in
      tokenize("aa?3 c,a?2
", ",") satisfies
      not(matches($s, "^(?:\c?\?\d\s\c+)$"))
  )
