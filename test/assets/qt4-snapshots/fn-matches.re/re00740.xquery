(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[abcd\-d-[bc]]+)$")
) and
  (
    every
      $s in
      tokenize("bbbaaa---dddccc,bbbaaa---dddccc", ",") satisfies
      not(matches($s, "^(?:[abcd\-d-[bc]]+)$"))
  )
