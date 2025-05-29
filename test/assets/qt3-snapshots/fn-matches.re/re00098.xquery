(
  every
    $s in
    tokenize("\,[,],\[,\[],[],[\\,\]\,[][", ",") satisfies
    matches($s, "^(?:[\\\[\]]{0,3})$")
) and
  (
    every
      $s in
      tokenize("\[][,\]\],[][]", ",") satisfies
      not(matches($s, "^(?:[\\\[\]]{0,3})$"))
  )
