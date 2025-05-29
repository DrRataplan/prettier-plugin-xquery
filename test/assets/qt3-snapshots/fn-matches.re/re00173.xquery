(
  every $s in tokenize("􀀀󰀀󿿽􏿽", ",") satisfies matches($s, "^(?:(\p{Co})*)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:(\p{Co})*)$")))
