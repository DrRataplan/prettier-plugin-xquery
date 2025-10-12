(every $s in tokenize(" ,
,
,	", ",") satisfies matches($s, "^(?:\s)$")) and
  (every $s in tokenize("a,", ",") satisfies not(matches($s, "^(?:\s)$")))
