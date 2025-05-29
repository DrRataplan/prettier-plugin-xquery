(
  every $s in tokenize("
a
b
c
", ",") satisfies matches($s, "^(?:\na\nb\nc\n)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\na\nb\nc\n)$"))
  )
