(every $s in tokenize(" ", ",") satisfies matches($s, "^(?:\P{S}*)$")) and
  (
    every
      $s in
      tokenize("⁄￢₠₠￦゛゛￣㆐㆐𝇝", ",") satisfies
      not(matches($s, "^(?:\P{S}*)$"))
  )
