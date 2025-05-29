(every $s in tokenize("₠", ",") satisfies matches($s, "^(?:\P{C}*)$")) and
  (
    every
      $s in
      tokenize("	܏܏󠁸􀀀󰀀󿿽􏿽", ",") satisfies
      not(matches($s, "^(?:\P{C}*)$"))
  )
