(
  every
    $s in
    tokenize(
      "abab,ababab,ababababababababababababababababababababababababababababababababab",
      ","
    ) satisfies
    matches($s, "^(?:(ab){2,})$")
) and
  (
    every
      $s in
      tokenize("ab,ababa,ababaa,ababababa,abab abab,", ",") satisfies
      not(matches($s, "^(?:(ab){2,})$"))
  )
