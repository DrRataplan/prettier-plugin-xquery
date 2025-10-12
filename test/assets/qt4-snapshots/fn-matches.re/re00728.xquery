(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:[\P{Nd}-[\p{Nd}]]+)$")
) and
  (
    every
      $s in
      tokenize("azAZ09", ",") satisfies
      not(matches($s, "^(?:[\P{Nd}-[\p{Nd}]]+)$"))
  )
