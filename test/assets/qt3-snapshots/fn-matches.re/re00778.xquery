(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:(d)(o)(g)(\s)(c)(a)(t)(\s)(h)(a)(s))$")
) and
  (
    every
      $s in
      tokenize("My dog cat has fleas.,My dog cat has fleas.", ",") satisfies
      not(matches($s, "^(?:(d)(o)(g)(\s)(c)(a)(t)(\s)(h)(a)(s))$"))
  )
