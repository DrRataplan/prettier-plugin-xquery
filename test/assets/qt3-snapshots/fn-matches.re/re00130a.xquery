(
  every
    $s in
    tokenize("&#xA;&#xD;a&#xA;&#xD;b", ",") satisfies
    (matches($s, "^(?:\n\ra\n\rb)$"))
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\n\ra\n\rb)$")))
