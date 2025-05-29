(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:98[\d-[9]][\d-[8]][\d-[0]])$")
) and
  (
    every
      $s in
      tokenize("98911 98881 98870 98871", ",") satisfies
      not(matches($s, "^(?:98[\d-[9]][\d-[8]][\d-[0]])$"))
  )
