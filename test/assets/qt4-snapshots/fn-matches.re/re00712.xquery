(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\w-[b-y\p{Po}]]+)$")
) and
  (
    every
      $s in
      tokenize("!#bbbaaaABCD09zzzyyy", ",") satisfies
      not(matches($s, "^(?:[\w-[b-y\p{Po}]]+)$"))
  )
