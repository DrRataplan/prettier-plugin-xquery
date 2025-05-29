(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsIPAExtensions})$")
) and
  (
    every
      $s in
      tokenize("ɏ", ",") satisfies
      not(matches($s, "^(?:\p{IsIPAExtensions})$"))
  )
