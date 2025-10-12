(
  every
    $s in
    tokenize("dddeeeccceee", ",") satisfies
    matches($s, "^(?:(([c-e]*)|([d-f]*)))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(([c-e]*)|([d-f]*)))$"))
  )
