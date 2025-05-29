(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:(foo)([\r]*)(bar))$")
) and
  (
    every
      $s in
      tokenize("foo   bar", ",") satisfies
      not(matches($s, "^(?:(foo)([\r]*)(bar))$"))
  )
