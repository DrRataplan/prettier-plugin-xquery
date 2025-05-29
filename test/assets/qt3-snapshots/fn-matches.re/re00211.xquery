(every $s in tokenize("⁄", ",") satisfies matches($s, "^(?:\P{Co}*)$")) and
  (
    every
      $s in
      tokenize("􀀀󰀀󿿽􏿽", ",") satisfies
      not(matches($s, "^(?:\P{Co}*)$"))
  )
