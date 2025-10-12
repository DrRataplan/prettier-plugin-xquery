(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[abcdef-[^bce]]+)$")
) and
  (
    every
      $s in
      tokenize("adfbcefda", ",") satisfies
      not(matches($s, "^(?:[abcdef-[^bce]]+)$"))
  )
