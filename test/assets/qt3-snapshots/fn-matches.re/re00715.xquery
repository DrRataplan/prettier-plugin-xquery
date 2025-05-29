(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:[\p{Nd}-[2468az]]+)$")
) and
  (
    every
      $s in
      tokenize("az20135798", ",") satisfies
      not(matches($s, "^(?:[\p{Nd}-[2468az]]+)$"))
  )
