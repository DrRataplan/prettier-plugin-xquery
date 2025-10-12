(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:[\d-[13579a-zA-Z]]+)$")
) and
  (
    every
      $s in
      tokenize("AZ1024689", ",") satisfies
      not(matches($s, "^(?:[\d-[13579a-zA-Z]]+)$"))
  )
