(
  every
    $s in
    tokenize("http://www.foo.com", ",") satisfies
    matches($s, "^(?:http://\c*)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:http://\c*)$")))
