(
  every
    $s in
    tokenize(
      "abc,abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc",
      ","
    ) satisfies
    matches($s, "^(?:ab+c)$")
) and
  (
    every
      $s in
      tokenize("ac,bbbc,abbb,", ",") satisfies
      not(matches($s, "^(?:ab+c)$"))
  )
