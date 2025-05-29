(
  every
    $s in
    tokenize("dddeeeccceee", ",") satisfies
    matches($s, "^(?:(([d-f]*)|([c-e]*)))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(([d-f]*)|([c-e]*)))$"))
  )
