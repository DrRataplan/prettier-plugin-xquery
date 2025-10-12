(
  every $s in tokenize("ً𝆭ः𝅲ः𝅲⃝⃝⃠", ",") satisfies matches($s, "^(?:\p{M}*)$")
) and
  (every $s in tokenize("ǅ", ",") satisfies not(matches($s, "^(?:\p{M}*)$")))
