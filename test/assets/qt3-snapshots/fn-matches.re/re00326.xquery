(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsEthiopic}?)$")
) and
  (
    every
      $s in
      tokenize("Ꭰ", ",") satisfies
      not(matches($s, "^(?:\p{IsEthiopic}?)$"))
  )
