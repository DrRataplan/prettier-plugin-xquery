(every $s in tokenize("²", ",") satisfies matches($s, "^(?:\P{P}*)$")) and
  (
    every
      $s in
      tokenize("‿･〜〜－〝〝｢〞〞｣««‹»»›¿¿､", ",") satisfies
      not(matches($s, "^(?:\P{P}*)$"))
  )
