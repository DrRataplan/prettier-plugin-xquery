(
  every $s in tokenize("-300", ",") satisfies matches($s, "^(?:\-?[0-3]{3})$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\-?[0-3]{3})$"))
  )
