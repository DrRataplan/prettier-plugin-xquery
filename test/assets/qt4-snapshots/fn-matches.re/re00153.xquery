(
  every
    $s in
    tokenize("‿･〜〜－〝〝｢〞〞｣««‹»»›¿¿､", ",") satisfies
    matches($s, "^(?:\p{P}*)$")
) and
  (every $s in tokenize("²", ",") satisfies not(matches($s, "^(?:\p{P}*)$")))
