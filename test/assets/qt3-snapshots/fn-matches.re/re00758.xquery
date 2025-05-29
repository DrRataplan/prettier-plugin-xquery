(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[a\-\[\-\[\-bc]+)$")
) and
  (
    every
      $s in
      tokenize("```bbbaaa---[[[cccddd", ",") satisfies
      not(matches($s, "^(?:[a\-\[\-\[\-bc]+)$"))
  )
