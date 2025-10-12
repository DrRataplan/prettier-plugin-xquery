(
  every
    $s in
    tokenize("⁄￢₠₠￦゛゛￣㆐㆐𝇝", ",") satisfies
    matches($s, "^(?:\p{S}*)$")
) and
  (every $s in tokenize(" ", ",") satisfies not(matches($s, "^(?:\p{S}*)$")))
