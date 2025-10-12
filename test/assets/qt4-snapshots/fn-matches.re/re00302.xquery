(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsIPAExtensions}?)$")
) and
  (
    every
      $s in
      tokenize("ʰ", ",") satisfies
      not(matches($s, "^(?:\p{IsIPAExtensions}?)$"))
  )
