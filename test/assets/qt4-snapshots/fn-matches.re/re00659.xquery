(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:(([0-9])|([a-z])|([A-Z]))+)$")
) and
  (
    every
      $s in
      tokenize(
        "{hello 1234567890 world},{HELLO 1234567890 world},{1234567890 hello world}",
        ","
      ) satisfies
      not(matches($s, "^(?:(([0-9])|([a-z])|([A-Z]))+)$"))
  )
