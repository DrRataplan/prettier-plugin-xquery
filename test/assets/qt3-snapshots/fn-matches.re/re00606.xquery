(every $s in tokenize("", ",") satisfies matches($s, "^(?:(foo)\W*(bar))$")) and
  (
    every
      $s in
      tokenize("wiofoo   bar3270", ",") satisfies
      not(matches($s, "^(?:(foo)\W*(bar))$"))
  )
