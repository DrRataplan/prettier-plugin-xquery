(
  every
    $s in
    tokenize("1234567890:;<=>?@Azaz", ",") satisfies
    matches($s, "^(?:[0-z]*)$")
) and
  (every $s in tokenize("{,/", ",") satisfies not(matches($s, "^(?:[0-z]*)$")))
