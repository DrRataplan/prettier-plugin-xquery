(
  every
    $s in
    tokenize("a", ",") satisfies
    matches($s, "^(?:[^\P{IsBasicLatin}])$")
) and
  (
    every
      $s in
      tokenize("Ā", ",") satisfies
      not(matches($s, "^(?:[^\P{IsBasicLatin}])$"))
  )
