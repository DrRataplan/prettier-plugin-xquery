(
  every
    $s in
    tokenize("a b	, a  
", ",") satisfies
    matches($s, "^(?:\S?\s?\S?\s+)$")
) and
  (
    every
      $s in
      tokenize("a  b, a b,ab", ",") satisfies
      not(matches($s, "^(?:\S?\s?\S?\s+)$"))
  )
