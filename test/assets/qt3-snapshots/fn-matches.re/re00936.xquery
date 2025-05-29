(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:(([a-c])b*?\2){3})$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(([a-c])b*?\2){3})$"))
  )
