(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\p{Nd}-[2468]]+)$")
) and
  (
    every
      $s in
      tokenize("20135798", ",") satisfies
      not(matches($s, "^(?:[\p{Nd}-[2468]]+)$"))
  )
