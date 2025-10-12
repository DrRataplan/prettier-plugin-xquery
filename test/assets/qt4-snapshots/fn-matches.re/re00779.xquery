(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:^([a-z0-9]+)@([a-z]+)\.([a-z]+)$)$")
) and
  (
    every
      $s in
      tokenize("bar@bar.foo.com", ",") satisfies
      not(matches($s, "^(?:^([a-z0-9]+)@([a-z]+)\.([a-z]+)$)$"))
  )
