(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:(foo)(\c\[*)(bar))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(foo)(\c\[*)(bar))$"))
  )
