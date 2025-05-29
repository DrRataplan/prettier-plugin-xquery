(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsMyanmar}?)$")
) and
  (
    every
      $s in
      tokenize("Ⴀ", ",") satisfies
      not(matches($s, "^(?:\p{IsMyanmar}?)$"))
  )
