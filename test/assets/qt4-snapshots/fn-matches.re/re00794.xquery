(every $s in tokenize("", ",") satisfies matches($s, "^(?:(abra(cad)?)+)$")) and
  (
    every
      $s in
      tokenize("abracadabra1abracadabra2abracadabra3", ",") satisfies
      not(matches($s, "^(?:(abra(cad)?)+)$"))
  )
