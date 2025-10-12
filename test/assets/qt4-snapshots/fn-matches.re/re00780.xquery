(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:^http://www.([a-zA-Z0-9]+)\.([a-z]+)$)$")
) and
  (
    every
      $s in
      tokenize("http://www.foo.bar.com", ",") satisfies
      not(matches($s, "^(?:^http://www.([a-zA-Z0-9]+)\.([a-z]+)$)$"))
  )
