(
  every
    $s in
    tokenize("Foo Bar,Foo Bar", ",") satisfies
    matches($s, "^(?:(Foo) (Bar))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(Foo) (Bar))$"))
  )
