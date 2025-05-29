(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:[\d-[de357fgA-Z]]+)$")
) and
  (
    every
      $s in
      tokenize("AZ51246897", ",") satisfies
      not(matches($s, "^(?:[\d-[de357fgA-Z]]+)$"))
  )
