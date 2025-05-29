(
  every
    $s in
    tokenize("--03-14", ",") satisfies
    matches($s, "^(?:--0[123]\-(12|14))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:--0[123]\-(12|14))$"))
  )
