(
  every $s in tokenize("	a	b	c	", ",") satisfies matches($s, "^(?:\ta\tb\tc\t)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\ta\tb\tc\t)$"))
  )
