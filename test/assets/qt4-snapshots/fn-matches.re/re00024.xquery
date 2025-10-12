(
  every
    $s in
    tokenize("aa,aaaa,aaaaaaaaaaaaaaaaaaaa", ",") satisfies
    matches($s, "^(?:(a{2})+)$")
) and
  (
    every
      $s in
      tokenize(",a,a2,aaa", ",") satisfies
      not(matches($s, "^(?:(a{2})+)$"))
  )
