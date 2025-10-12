(
  every
    $s in
    tokenize("ab.cc", ",") satisfies
    matches($s, "^(?:a+\.?b*\.+c{2})$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:a+\.?b*\.+c{2})$"))
  )
