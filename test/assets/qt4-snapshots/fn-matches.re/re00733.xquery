(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:([\p{Ll}-[aeiou]]|[^\w-[\s]])+)$")
) and
  (
    every
      $s in
      tokenize("aeiobcdxyz!@#aeio", ",") satisfies
      not(matches($s, "^(?:([\p{Ll}-[aeiou]]|[^\w-[\s]])+)$"))
  )
